import express from "express";
import helmet from "helmet";
import cors from "cors";
import { appRoutes } from "./presentation/routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rotas principais
app.use("/api", appRoutes);

export { app };
