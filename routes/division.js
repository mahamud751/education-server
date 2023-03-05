import express from "express";
import {
  CreateDivision,
  deleteDivision,
  getDivision,
  getSingleDivision,
  updateDivision,
} from "../controllers/division.js";

const router = express.Router();

router.post("/", CreateDivision);
router.get("/", getDivision);
router.get("/:id", getSingleDivision);
router.delete("/:id", deleteDivision);
router.put("/:id", updateDivision);

export default router;
