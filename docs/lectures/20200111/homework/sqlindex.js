const sqlite3 = require('sqlite3').verbose(); //verbose: amikor valami beszédes, sok infót elárulnak a hibaüzenetek
const db = require('sqlhw') 

db.serialize(() => { //serialize fontos, utasításokat sorban egymás után hajtja végre. Minden végre kell hajtódjon, mielőtt a köv utasíté
    // elkezdődne.Parallel végrehajtás esetén error lenne (ha nem adom meg hogy serialize, akkor defaultból parallel lesz)
    db.run("CREATE TABLE lorem (info TEXT)");

    for (let i = 0; i < 10; i++){
        db.run(`INSERT INTO lorem VALUES (${i})`) //json fileok alapján inserteket csinálunk és feltöltjük a db-t
    }

    db.all('SELECT rowid as id, info lorem from lorem', (err, rows) => { //row-ban utazik tömbként az összes visszatérített obejktum
        if(err) console.log(err)
        rows.forEach(row => console.log(row))
            
        })
    
    
});

db.close(); //becsukja az adatbázis kapcoslatot: küld egy jelet a túloldalra, hogy nem fog több üzenetet küldeni a db-be