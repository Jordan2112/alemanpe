Create database alemanpe;

use alemanpe;


create table Acceso(

    nombre varchar(40),
    apellidop varchar(40),
    apellidom varchar(40),
    Usuario primary key varchar (40),
    Password varchar(50)

);


insert into Acceso (nombre,apellidop,apellidom,Usuario,Password)
values ('Jordan','Aleman','Perez','JordanA','Aleman')

insert into Acceso (nombre,apellidop,apellidom,Usuario,Password)
values ('Luis','Martinez','Quezada','LuisQ','12345')

insert into Acceso (nombre,apellidop,apellidom,Usuario,Password)
values ('Maria','Luna','Hernandez','MariaH','Maria1234')

