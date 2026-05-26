create DATABASE ssm_adm;
USE ssm_adm;

CREATE TABLE usuarios (
idusuario INT auto_increment,
nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
email VARCHAR(100) NOT NULL UNIQUE,
contrasena VARCHAR(255) NOT NULL,
rol ENUM('administrador','vendedor') NOT NULL DEFAULT 'vendedor',
fecha_registro timestamp DEFAULT current_timestamp,
PRIMARY KEY(idusuario)
);

CREATE TABLE productos (
idproducto INT auto_increment,
nombre varchar(100) NOT NULL UNIQUE,
precio decimal(10,2) NOT NULL,
stock INT NOT NULL DEFAULT 0,
stock_minimo INT NOT NULL DEFAULT 0,
categoria VARCHAR(50),
activo tinyint(1) default 1,
primary key(idproducto)
);