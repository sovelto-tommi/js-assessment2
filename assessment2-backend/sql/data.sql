-- CLEARS THE TABLE! And then sets the ids to start from 1
DELETE FROM models;
ALTER SEQUENCE models_id_seq RESTART;
-- Add a few models
INSERT INTO models(name) VALUES('Ninebot'), ('Glion'), ('Xiaomi');

-- TODO: Lisää neljä skuuttia scooters tauluun
-- JavaScript oliot olisivat:
/*
    const skuutit = [
      {
        id: 1,
        model: { id: 2, name: 'Glion' },
        electricity: { max: 500, current: 480 },
        position: { lat: 60.12345, lon: 23.0415 },
        added: '2019-04-01'
      },
      {
        id: 2,
        model: { id: 1, name: 'Ninebot' },
        electricity: { max: 1200, current: 230 },
        position: { lat: 60.5421, lon: 23.1 },
        added: '2019-04-01'
      },
      {
        id: 3,
        model: { id: 3, name: 'Xiaomi' },
        electricity: { max: 740, current: 500 },
        position: { lat: 60.12345, lon: 23.0416 },
        added: '2019-04-01'
      },
      {
        id: 4,
        model: { id: 2, name: 'Glion' },
        electricity: { max: 500, current: 500 },
        position: { lat: 60.3, lon: 24.314 },
        added: '2019-07-14'
      }
    ]

*/