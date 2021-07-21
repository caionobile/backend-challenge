import { Router } from "express";
import {
  getVideos,
  getVideoById,
  insertVideo,
  deleteVideoById,
  updateVideoById,
  replaceVideoById,
} from "../controllers/video.controller";

const router = Router();

router.post("/", insertVideo);
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.patch("/:id", updateVideoById);
router.put("/:id", replaceVideoById);
router.delete("/:id", deleteVideoById);

export default router;
