-- DDL generated by Postico 1.5.19
-- Not all database features are supported. Do not use for backup.

-- Table Definition ----------------------------------------------

CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       name character varying,
                       email character varying,
                       password character varying
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX users_pkey ON users(id int4_ops);

-- Table Definition ----------------------------------------------

CREATE TABLE reflections (
                             id SERIAL PRIMARY KEY,
                             success character varying,
                             low_point character varying,
                             take_away character varying,
                             owner_id integer REFERENCES users(id) ON DELETE CASCADE,
                             created_date date,
                             modified_date date
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX reflections_pkey ON reflections(id int4_ops);
