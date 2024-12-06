import express from "express";
import authRoutes from "./routes/auth.js";
import connectToDatabase from "./db/connection.js";
import authMiddleware from "./middlewares/auth.js";
import quizRoutes from "./routes/quiz.js"

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/quiz", quizRoutes);

app.listen(8080, async () => {
  console.log("Server running on port 8080");

  connectToDatabase();
});
