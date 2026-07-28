USE codewars;

DROP TABLE IF EXISTS fakebin;

CREATE TABLE fakebin (
    x VARCHAR(255)
);

INSERT INTO fakebin (
    x
)
VALUES
  ("45385593107843568"),
  ("509321967506747"),
  ("366058562030849490134388085"),
  ("15889923"),
  ("800857237867");

SELECT
    x,
    REGEXP_REPLACE(
        REGEXP_REPLACE(x, '[0-4]', '0'),
        '[5-9]',
        '1'
    ) AS res
FROM fakebin;