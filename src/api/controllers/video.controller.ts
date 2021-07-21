import video from "../models/video.schema";
import { Request, Response } from "express";

export const getVideos = async (req: Request, res: Response): Promise<Response> => {
    const videos = await video.find()
    return res.status(200).json(videos)
}
