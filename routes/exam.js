import express from "express";
import {
  CreateExam,
  deleteExam,
  getExam,
  getSingleExam,
  updateExam,
} from "../controllers/exam.js";

const router = express.Router();

router.post("/", CreateExam);
router.get("/", getExam);
router.get("/:id", getSingleExam);
router.delete("/:id", deleteExam);
router.put("/:id", updateExam);

export default router;
