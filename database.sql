CREATE TABLE Crianca (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL
);

CREATE TABLE Atividade (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(50) NOT NULL,
  descricao TEXT
);

CREATE TABLE Participacao (
  id INT PRIMARY KEY AUTO_INCREMENT,
  crianca_id INT NOT NULL,
  atividade_id INT NOT NULL,
  data DATE,
  observacao TEXT,
  FOREIGN KEY (crianca_id) REFERENCES Crianca(id),
  FOREIGN KEY (atividade_id) REFERENCES Atividade(id)
);
