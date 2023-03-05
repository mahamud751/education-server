import express from "express";
import {
  CreateHiring,
  deleteHiring,
  getHiring,
  getSingleHiring,
  updateHiring,
} from "../controllers/hiring.js";

const router = express.Router();

router.post("/", CreateHiring);
router.get("/", getHiring);
router.get("/:id", getSingleHiring);
router.delete("/:id", deleteHiring);
router.put("/:id", updateHiring);

export default router;
