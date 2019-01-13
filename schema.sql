DROP DATABASE IF EXISTS democloud;

CREATE DATABASE democloud;

\connect democloud;

CREATE TABLE SongsInfos (
id SERIAL PRIMARY KEY ,
plays INT,
likes INT,
reposts INT,
description CHAR(155),
artist CHAR(75),
artist_followers INT,
artist_tracks INT
);


