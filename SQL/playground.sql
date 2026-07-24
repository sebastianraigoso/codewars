USE codewars;

DROP TABLE IF EXISTS disemvowel;

CREATE TABLE disemvowel (
    str TEXT
);

INSERT INTO disemvowel (
    str
)
VALUES
    ('This website is for losers LOL!'),
    ('No offense but,\nYour writing is among the worst I''ve ever read'),
    ('Whar are you, a communist?');

-- the ugly monster
SELECT
    str,
    REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(
                                    REPLACE(
                                        REPLACE(str, 'a', ''),
                                    'A', ''),
                                'e', ''),
                            'E', ''),
                        'i', ''),
                    'I', ''),
                'o', ''),
            'O', ''),
        'u', ''),
    'U', '') AS res
FROM disemvowel;