import Announcement from "../models/Announcement.js";

export const CreateAnnouncement = async (req, res, next) => {
  const newAnnouncement = new Announcement(req.body);
  try {
    const category = await newAnnouncement.save();
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const getAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.find({});
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};
export const getSingleAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};
export const deleteAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};

export const updateAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(announcement);
  } catch (err) {
    next(err);
  }
};
