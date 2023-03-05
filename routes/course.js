import express from "express";
import {
  CreateCourse,
  deleteCourse,
  getCourse,
  getSingleCourse,
  updateCourse,
} from "../controllers/course.js";

const router = express.Router();

router.post("/", CreateCourse);
router.get("/", getCourse);
router.get("/:id", getSingleCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", updateCourse);

export default router;
