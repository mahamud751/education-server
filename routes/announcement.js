import express from "express";
import {
  CreateAnnouncement,
  deleteAnnouncement,
  getAnnouncement,
  getSingleAnnouncement,
  updateAnnouncement,
} from "../controllers/announcement.js";

const router = express.Router();

router.post("/", CreateAnnouncement);
router.get("/", getAnnouncement);
router.get("/:id", getSingleAnnouncement);
router.delete("/:id", deleteAnnouncement);
router.put("/:id", updateAnnouncement);

export default router;
