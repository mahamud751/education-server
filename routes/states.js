import express from "express";
import {
  CreateStates,
  deleteStates,
  getStates,
  getSingleStates,
  updateStates,
} from "../controllers/states.js";

const router = express.Router();

router.post("/", CreateStates);
router.get("/", getStates);
router.get("/:id", getSingleStates);
router.delete("/:id", deleteStates);
router.put("/:id", updateStates);

export default router;
