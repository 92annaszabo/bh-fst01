const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb');

const fs = require('fs')

function generateCreateTableStatement(tableName, row) {
    
    let colnames = Object.keys(row)

    let columnDefinitions = colnames.map(colName => {
        return `${colName} VARCHAR(80)`
    }).join(',')

    let sql = `CREATE TABLE ${tableName} (${columnDefinitions})`


    return sql
}

db.serialize(() => { // <-- serialize fontos: parallel vegrehajtas miatt error lenne

    const dataJSON = fs.readFileSync(process.argv[3], 'utf8')

    const data = JSON.parse(dataJSON)

    const keys = Object.keys(data);
    const createSQLs = []
    keys.forEach(tableName => createSQLs.push(generateCreateTableStatement(tableName, data[tableName][0])))

    db.run(createSQLs[0])
    db.run(createSQLs[1])
    

    // db.run(generateCreateTableStatement(data))


    data.horror.forEach(emp => db.run(`INSERT INTO horror VALUES ("${emp.id}", "${emp.title}")`))
    data.romance.forEach(dep => db.run(`INSERT INTO romance VALUES ("${dep.id}", "${dep.title}")`))
  
    db.all('SELECT * FROM horror', (err, rows) => {
        if (err) {
            console.log(err)
            return
        } 

        rows.forEach(row => console.log(row))
    })

    db.all('SELECT * FROM romance', (err, rows) => {
        if (err) {
            console.log(err)
            return
        } 

        rows.forEach(row => console.log(row))
    })
  });