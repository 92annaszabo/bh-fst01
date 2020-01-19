const sqlite3 = require('sqlite3').verbose(); 
const db = new sqlite3.Database('sqlhw01'); 

db.serialize(() => { 

    db.run('CREATE IF NOT EXISTS TABLE awards (year_film INT, year_award INT,ceremony INT, category, nominee, film ,win BOOLEAN)') 

    db.all('SELECT nominee FROM awards WHERE ceremony = 5 AND category LIKE "%Actress%" OR category LIKE "%Actor%";', (err, rows) => { 
        console.log("Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek:");
        if(err) {
            console.log(err)
            return
        }
        rows.forEach(row => console.log(`- ${row.nominee}`))
            
        });
    db.all('SELECT nominee FROM awards WHERE ceremony = 5 AND category LIKE "%Actress%" OR category LIKE "%Actor%" AND win = True;', (err, rows) => { 
        console.log("Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek és díjat is kaptak:");
        if(err) {
            console.log(err)
            return
        }
        rows.forEach(row => console.log(`- ${row.nominee}`))
            
        });
    db.all('SELECT DISTINCT nominee FROM awards WHERE year_award >= 1950 AND year_award < 1960 AND (category LIKE "%Actress%" OR category LIKE "%Actor%");', (err, rows) => { 
        console.log("Az 1950-es években jelölt színészek nevei. Egy név csak egyszer szerepeljel az eredményben.");
        if(err) {
            console.log(err)
            return
        }
        rows.forEach(row => console.log(`- ${row.nominee}`))
            
        });
    db.all('SELECT DISTINCT this_year.year_award FROM awards AS this_year JOIN awards AS last_year WHERE this_year.nominee = "Meryl Streep" AND last_year.nominee = "Mery Streep" AND this_year.year_award = last_year.year_award + 1 AND this_year.win = True AND last_year.win = False ;', (err, rows) => { 
        console.log("Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.");
        if(err) {
            console.log(err)
            return
        }
        rows.forEach(row => console.log(`- ${row.year}`))
            
        });
    
    
});

db.close();