import express from "express"
import produtoRoutes from "./routes/produtos.js"
import cors from "cors"
import { db } from "./db.js" 
import vendaRoutes from "./routes/vendas.js"

const app = express()
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.json())
app.use(cors())

app.use("/produtos", produtoRoutes)
app.use("/vendas", vendaRoutes)

app.listen(8800)