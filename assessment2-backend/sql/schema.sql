CREATE TABLE IF NOT EXISTS models (
    id SERIAL PRIMARY KEY,
    name varchar(127) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS scooters (
    id SERIAL PRIMARY KEY,
    model INTEGER NOT NULL REFERENCES models(id),
    lat DOUBLE PRECISION,
    lon DOUBLE PRECISION,
    max_electricity INTEGER NOT NULL,
    current_electricity INTEGER,
    added DATE NOT NULL DEFAULT CURRENT_DATE
);

