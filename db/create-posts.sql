DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    name varchar(100) NOT NULL,
    content varchar(500) NOT NULL
);
