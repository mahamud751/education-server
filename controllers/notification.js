import Notification from "../models/Notification.js";

export const CreateNotification = async (req, res, next) => {
  const newNotification = new Notification(req.body);
  try {
    const notification = await newNotification.save();
    res.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
export const getNotification = async (req, res, next) => {
  try {
    const notification = await Notification.find({});
    res.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
export const getSingleNotification = async (req, res, next) => {
  try {
    const notification = await Notification.findById(req.params.id);
    res.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
export const deleteNotification = async (req, res, next) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};

export const updateNotification = async (req, res, next) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(notification);
  } catch (err) {
    next(err);
  }
};
