SELECT 'CREATE DATABASE scooters'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'scooters')\gexec
\c scooters