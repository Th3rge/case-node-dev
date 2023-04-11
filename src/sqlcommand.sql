use storefood;


-- Deletando Tabela
DROP TABLE IF EXISTS Products;

-- Criando tabela produtos
CREATE TABLE Products (
    id VARCHAR(255) PRIMARY KEY,
    categories VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    qnty INT NOT NULL,
    price FLOAT NOT NULL
);

-- Inserindo Valor
INSERT INTO Products (id, categories, name, qnty, price)
VALUES 
    ("token1", "pizza", "pizza chicago", 10, 29.90),
    ("token2", "bebida", "coca-cola", 100, 19.90),
    ("token3", "acompanhamento", "batata frita", 1, 9.90);


-- Puxa tudo da tabela
SELECT * FROM Products;
