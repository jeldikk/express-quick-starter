import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

const PORT = process.env.SERVER_PORT;

const app: Express = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("short"));
}

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "success message is sent!",
  });
});

//Start listening on server here
app.listen(PORT, () => console.log("Server Listening on port", PORT));
