CREATE TABLE IF NOT EXISTS utilizadores(
    id INT AUTO_INCREMENT,
    nome VARCHAR(30),
    email VARCHAR(15),
    idade INT
    primary key(id)
) default char set = 'utf8';