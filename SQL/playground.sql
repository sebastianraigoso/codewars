USE codewars;

DROP TABLE IF EXISTS goals;

CREATE TABLE goals (
  la_liga_goals INT,
  copa_del_rey_goals INT,
  champions_league_goals INT
);

INSERT INTO goals (
  la_liga_goals,
  copa_del_rey_goals,
  champions_league_goals
)
VALUES
(0, 0, 0),
(43, 10, 5);

SELECT
    la_liga_goals + copa_del_rey_goals + champions_league_goals AS res
FROM goals;