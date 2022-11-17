import express, { Express, Request, Response } from "express";
import { generateFakeUserData } from "./genUserData";

const users = generateFakeUserData();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API Running!");
});

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user) {
    return res.json(user);
  }
  return res.status(404).json({ msg: "User not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
