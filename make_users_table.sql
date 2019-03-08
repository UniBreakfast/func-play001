SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;

CREATE TABLE play004_users (
        id int(10) UNSIGNED NOT NULL,
     login varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  passhash varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
     email varchar(96) COLLATE utf8_unicode_ci DEFAULT NULL,
  nickname varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  fullname varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  dt_create datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  dt_modify datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
                            ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE play004_users
  ADD PRIMARY KEY (id),
  ADD  UNIQUE KEY login (login),
  ADD  UNIQUE KEY email (email);

ALTER TABLE play004_users
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

COMMIT;