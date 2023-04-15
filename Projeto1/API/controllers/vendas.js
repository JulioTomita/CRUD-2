import { db } from "../db.js";

export const getVendas = (_, res) => {
  const q = "SELECT * FROM venda";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addVendas = (req, res) => {
const q = "INSERT INTO venda(`cliente`, `dia`, `quantidade`, `idproduto`) VALUES(?)";

  const values = [
    req.body.cliente,
    req.body.dia,
    req.body.quantidade,
    req.body.idproduto,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Venda criada com sucesso.");
  });
};

export const updateVendas = (req, res) => {
  const q =
    "UPDATE venda SET `cliente` = ?, `dia` = ?, `quantidade` = ?, `idproduto` = ? WHERE `id` = ?";

  const values = [
    req.body.cliente,
    req.body.dia,
    req.body.quantidade,
    req.body.idproduto,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Venda atualizada com sucesso.");
  });
};

export const deleteVendas = (req, res) => {
  const q = "DELETE FROM venda WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Venda deletada com sucesso.");
  });
};
