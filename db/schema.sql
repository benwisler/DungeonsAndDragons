### Schema
DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE userInfo
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
