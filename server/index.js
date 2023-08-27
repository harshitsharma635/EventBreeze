import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan("common"));

app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

try {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error("Error starting the server:", error.message);
}
