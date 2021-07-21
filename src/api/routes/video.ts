import { Router } from "express";
/* import { getVideos } from "@controllers/video.controller"; */
import { getVideos } from "../controllers/video.controller";

const router = Router();

router.get("/", getVideos)

export default router;
