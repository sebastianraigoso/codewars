USE codewars;

DROP TABLE IF EXISTS kata;

CREATE TABLE kata (
  id INT,
  n INT,
  x INT,
  y INT
);

INSERT INTO kata (
  id,
  n,
  x,
  y
)
VALUES
  (1 ,3, 3, 4),
  (2 ,12, 3, 4),
  (3 ,8, 3, 4),
  (4 ,48, 3, 4),
  (5 ,100, 5, 10),
  (6 ,100, 5, 3),
  (7 ,4, 4, 2),
  (8 ,5, 2, 3),
  (9 ,17, 17, 17),
  (10 ,17, 1, 17);

SELECT
  id,
  (n % x = 0 and n % y = 0) AS res
FROM kata;