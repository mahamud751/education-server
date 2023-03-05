import mongoose from "mongoose";
const ExamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    exam_mode: {
      type: String,
      enum: ["online", "offline", "both"],
      default: "offline",
    },
    exam_date: {
      type: String,
    },
    result_date: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Exam", ExamSchema);
