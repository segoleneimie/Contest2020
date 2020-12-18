CREATE DATABASE IF NOT EXISTS puissance_quatre
CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`pseudo` VARCHAR(100) NOT NULL,
	`mdp` VARCHAR(100) NOT NULL,
	`score` INT(11) NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `pseudo` (`pseudo`)
);