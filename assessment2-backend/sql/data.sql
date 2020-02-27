-- CLEARS THE TABLE! And then sets the ids to start from 1
DELETE FROM models;
ALTER SEQUENCE models_id_seq RESTART;
-- Add a few models
INSERT INTO models(name) VALUES('Ninebot'), ('Glion'), ('Xiaomi');

DELETE FROM scooters;
INSERT INTO 
    scooters(model, lat, lon, max_electricity, current_electricity, added) 
VALUES 
    (2, 60.5421, 23.0415, 500, 480, '2019-04-01'),
    (1, 60.12345, 23.1, 1200, 230, '2019-04-01'),
    (3, 60.12345, 23.0416, 740, 500, '2019-04-01'),
    (2, 60.3, 23.314, 500, 500, '2019-07-14');


