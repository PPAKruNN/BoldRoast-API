import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));