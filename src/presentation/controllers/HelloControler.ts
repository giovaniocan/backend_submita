import { Request, Response } from "express";

export class HelloController {
  sayHello(req: Request, res: Response) {
    res.json({
      message: "Hello World!",
      status: "API funcionando bb!",
    });
  }
}
