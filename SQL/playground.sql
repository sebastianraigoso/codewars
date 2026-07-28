USE codewars;

DROP TABLE IF EXISTS fraction;

CREATE TABLE fraction (
    numerator INT,
    denominator INT
);

INSERT INTO fraction (
    numerator,
    denominator
)
VALUES
    (60, 20),
    (80, 120),
    (4, 2),
    (45, 120),
    (1000, 1),
    (1, 1);


CREATE FUNCTION gcd(a INT, b INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE temp INT;

    WHILE b <> 0 DO
        SET temp = b;
        SET b = a % b;
        SET a = temp;
    END WHILE;

    RETURN a;
END;

SELECT
    numerator,
    denominator,
    gcd(numerator, denominator) AS gcdq
FROM fraction;