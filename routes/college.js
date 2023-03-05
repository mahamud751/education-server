import express from "express";
import {
  CreateCollege,
  deleteCollege,
  getCollege,
  getSingleCollege,
  updateCollege,
} from "../controllers/college.js";

const router = express.Router();

router.post("/", CreateCollege);
router.get("/", getCollege);
router.get("/:id", getSingleCollege);
router.delete("/:id", deleteCollege);
router.put("/:id", updateCollege);

export default router;
