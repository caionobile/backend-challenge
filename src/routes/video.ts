import express from "express";
import Video from "../models/video";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ teste: 123 });
});

export default router;
