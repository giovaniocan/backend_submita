import express from "express";
import { HelloController } from "./presentation/controllers/HelloControler";

const app = express();

app.use(express.json());

const helloController = new HelloController();

app.get("/hello", helloController.sayHello);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando!",
    status: "Hello World!",
  });
});

export { app };
