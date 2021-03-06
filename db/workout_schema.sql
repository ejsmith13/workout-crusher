-- Database Creation
CREATE DATABASE workout_db;

USE workout_db;


-- Table Creation
CREATE TABLE workouts(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
workout_name VARCHAR(50),
crushed_it BOOLEAN);