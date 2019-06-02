create table library (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    description TEXT
);