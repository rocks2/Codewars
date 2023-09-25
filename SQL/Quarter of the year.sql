-- Quarter of the year
-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.
SELECT month,
    CASE
        WHEN month BETWEEN 1 AND 3 THEN 1  -- First quarter
        WHEN month BETWEEN 4 AND 6 THEN 2  -- Second quarter
        WHEN month BETWEEN 7 AND 9 THEN 3  -- Third quarter
        WHEN month BETWEEN 10 AND 12 THEN 4 -- Fourth quarter
    END AS res
FROM
    quarterof
WHERE
    month BETWEEN 1 AND 12; -- Make sure month is within the valid range (1 to 12)