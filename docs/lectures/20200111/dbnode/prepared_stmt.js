var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() { // <-- serialize fontos: parallel vegrehajtas miatt error lenne
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      // db.run(`INSERT INTO lorem VALUES (${i})`);
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });

    db.all('SELECT rowid as id, info from lorem', (err, rows) => {
      if (err) console.log(err)
      rows.forEach(row => console.log(row))
    })
});

 db.close(); // jelen programban elhagyhato, de ne hagyjuk el