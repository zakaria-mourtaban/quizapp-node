import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [
        {
          optionText: { type: String, required: true },
          isCorrect: { type: Boolean, required: true },
        },
      ],
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Quiz', quizSchema);
