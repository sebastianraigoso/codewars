USE codewars;

DROP TABLE IF EXISTS kata;

CREATE TABLE kata (
    id INT,
    base INT,
    factor INT
);

INSERT INTO kata (
    id,
    base,
    factor
)
VALUES
    (1, 10, 2),
    (2, 63, 7),
    (3, 2450, 5),
    (4, 24612, 3),
    (5, 9, 2),
    (6, 653, 7),
    (7, 2453, 5),
    (8, 24617, 3);

SELECT
    id,
    base % factor = 0 AS res
FROM kata;