const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users')
const absPath = "C:/Users/szabo1anna130/Desktop/braininghub/repo_forked/bh-fst01/docs/lectures/20200118/hw/static";

let users = []

module.exports = {
    addUserFromForm(req, res) {
        res.sendFile(`${absPath}/form.html`)
    },

    addNewUser(req,res){
        const data = req.body;

        users.push(data.username);

        db.serialize(function() {
           
                db.run("CREATE TABLE IF NOT EXISTS users (username, email, password)");
                
                db.run(`INSERT INTO users VALUES ("${data.username}", "${data.email}", "${data.password}")`);

            });
        
        res.redirect('/users');
        
    },

    getUsers(req, res) {
        // res.sendFile(`${absPath}/hello.html`)     
        db.serialize(function() {
        db.run("SELECT rowid AS id, username FROM users ORDER BY id DESC LIMIT 1", function(err, row) {
           
            if (err) {
                console.log(err)
                return
            } console.log(row)

            res.send(users)
           
        });
    });},
    
  
    
}
