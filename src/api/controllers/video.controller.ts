import { Request, Response } from 'express';
import video from '@models/video.schema';

const errorHandler = {
  ValidationError: { status: 400, error: 'All fields are required' },
  CastError: { status: 404, error: 'Video not found' },
};

export const getVideos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const videos = await video.find();
  return res.status(200).json(videos);
};

export const getVideoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const videoSelected = await video.findById(req.params.id);
    return res.status(200).json(videoSelected);
  } catch (e) {
    return res
      .status(errorHandler[e.name].status)
      .json({ error: errorHandler[e.name].error });
  }
};

export const insertVideo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const createdVideo = await video.create({ ...req.body });
    return res.status(201).json(createdVideo);
  } catch (e) {
    return res
      .status(errorHandler[e.name].status)
      .json({ error: errorHandler[e.name].error });
  }
};

export const updateVideoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await video.findByIdAndUpdate({ _id: req.params.id }, { ...req.body });
    const videoUpdated = await video.findById(req.params.id);
    return res.status(200).json(videoUpdated);
  } catch (e) {
    return res
      .status(errorHandler[e.name].status)
      .json({ error: errorHandler[e.name].error });
  }
};

export const replaceVideoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await video.findOneAndReplace({ _id: req.params.id }, { ...req.body });
    const videoReplaced = await video.findById(req.params.id);
    return res.status(200).json(videoReplaced);
  } catch (e) {
    return res
      .status(errorHandler[e.name].status)
      .json({ error: errorHandler[e.name].error });
  }
};
export const deleteVideoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (await video.findById(req.params.id)) {
    await video.findByIdAndRemove({ _id: req.params.id });
    return res.status(200).json({ message: 'Video deleted' });
  }
  return res.status(404).json({ message: 'Video not found' });
};
