import express from "express";
import { addVendas, deleteVendas, getVendas, updateVendas } from "../controllers/vendas.js";

const router = express.Router()

router.get("/", getVendas)

router.post("/", addVendas)

router.put("/:id", updateVendas)

router.delete("/:id", deleteVendas)

export default router