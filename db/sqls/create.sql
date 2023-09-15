CREATE TABLE
  `users` (
    `id` BIGINT (20) unsigned NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `enabled` tinyint (1) NOT NULL DEFAULT 0,
    `create_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    `update_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`),
    UNIQUE KEY `users_UN` (`id`, `email`, `username`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO
  users (email, username, password, enabled)
VALUES
  (
    'ken888686',
    'ken888686@gmail.com',
    '123456789',
    1
  ),
  (
    'ken666868',
    'ken666868@hotmail.com',
    '123456789',
    1
  ),
  (
    'aarontu0903',
    'aarontu0903@yahoo.ne.jp',
    '123456789',
    1
  );