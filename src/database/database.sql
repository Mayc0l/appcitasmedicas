create database citasmedicas;

create table users(
    id serial primary key,
    nombre varchar(20),
    apellido varchar(20),
    
);

insert into users(nombre, apellido) values('Maria', 'Navarrete'),
('Maycol', 'Cedeño');


