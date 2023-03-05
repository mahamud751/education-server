import express from "express";
import {
  CreateNotification,
  deleteNotification,
  getNotification,
  getSingleNotification,
  updateNotification,
} from "../controllers/notification.js";

const router = express.Router();

router.post("/", CreateNotification);
router.get("/", getNotification);
router.get("/:id", getSingleNotification);
router.delete("/:id", deleteNotification);
router.put("/:id", updateNotification);

export default router;
