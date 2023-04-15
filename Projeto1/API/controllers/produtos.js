import { db } from "../db.js";

export const getProdutos = (_, res) => {
  const q = "SELECT * FROM produto";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addProdutos = (req, res) => {
  const q =
    "INSERT INTO produto(`produto`, `codigo`, `valor`) VALUES(?)";

  const values = [
    req.body.produto,
    req.body.codigo,
    req.body.valor,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto criado com sucesso.");
  });
};

export const updateProdutos = (req, res) => {
  const q =
    "UPDATE produto SET `produto` = ?, `codigo` = ?, `valor` = ? WHERE `id` = ?";

  const values = [
    req.body.produto,
    req.body.codigo,
    req.body.valor,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso.");
  });
};

export const deleteProdutos = (req, res) => {
  const q = "DELETE FROM produto WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso.");
  });
};