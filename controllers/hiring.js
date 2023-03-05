import Hiring from "../models/Hiring.js";

export const CreateHiring = async (req, res, next) => {
  const newHiring = new Hiring(req.body);
  try {
    const hiring = await newHiring.save();
    res.status(200).json(hiring);
  } catch (err) {
    next(err);
  }
};
export const getHiring = async (req, res, next) => {
  try {
    const hiring = await Hiring.find({});
    res.status(200).json(hiring);
  } catch (err) {
    next(err);
  }
};
export const getSingleHiring = async (req, res, next) => {
  try {
    const hiring = await Hiring.findById(req.params.id);
    res.status(200).json(hiring);
  } catch (err) {
    next(err);
  }
};
export const deleteHiring = async (req, res, next) => {
  try {
    const hiring = await Hiring.findByIdAndDelete(req.params.id);
    res.status(200).json(hiring);
  } catch (err) {
    next(err);
  }
};

export const updateHiring = async (req, res, next) => {
  try {
    const hiring = await Hiring.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(hiring);
  } catch (err) {
    next(err);
  }
};
