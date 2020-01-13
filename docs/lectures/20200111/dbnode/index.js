const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => { // <-- serialize fontos: parallel vegrehajtas miatt error lenne
  try {
    db.run("CREATE TABLE lorem (info TEXT)", (a, err) => {
      console.log('an error has occured:', err)
    });

  } catch (e) {
    console.log('error was thrown', e)
  }

  for (let i = 0; i < 10; i++) {
      db.run(`INSERT INTO lorem VALUES (${i})`);
  }

    db.all('SELECT rowid as id, info from lorem', (err, rows) => {
      if (err) console.log(err)
      rows.forEach(row => console.log(row))
    })
});

 db.close(); // jelen programban elhagyhato, de ne hagyjuk el