CREATE TABLE awards (year_film INT, year_award INT,ceremony INT, category, nominee, film ,win BOOLEAN)
SELECT 
    nominee
FROM 
    awards
WHERE 
    ceremony = 5 
AND
    category LIKE '%Actress%' OR category LIKE '%Actor%';

---------
SELECT 
    nominee
FROM 
    awards
WHERE 
    ceremony = 5 
AND
    category LIKE '%Actress%' OR category LIKE '%Actor%' AND win = True;

---------

SELECT DISTINCT
    nominee, year_award 
FROM 
    awards 

WHERE 
    year_award >= 1950 
AND 
    year_award < 1960 
(AND
    category LIKE '%Actress%' OR category LIKE '%Actor%';

--------------------

SELECT DISTINCT
    this_year.nominee, 
    this_year.year_award 
FROM 
    awards 
AS 
    this_year
JOIN 
    awards 
AS 
    last_year 
WHERE 
    this_year.nominee = 'Meryl Streep' 
AND 
    last_year.nominee = 'Meryl Streep' 
AND 
    this_year.year_award = last_year.year_award +1 
AND 
    this_year.win = 'True' 
AND 
    last_year.win = 'False';

-----------------