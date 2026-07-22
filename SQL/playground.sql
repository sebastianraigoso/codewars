USE codewars;

DROP TABLE IF EXISTS love;

CREATE TABLE love (
    flower1 INT,
    flower2 INT
);

INSERT INTO love (flower1, flower2)
VALUES
(1, 4),
(2, 2),
(0, 1),
(0, 0);

SELECT
    flower1,
    flower2,
    (flower1 % 2) <> (flower2 % 2) AS res
FROM love;