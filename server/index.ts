import express from "express";
import dotenv from "dotenv";
import { AuthRoute } from "./3-routes/auth";
import { verifyToken } from "./middleware/jwt";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", AuthRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
