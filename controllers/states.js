import Division from "../models/Division.js";
import States from "../models/States.js";
export const CreateStates = async (req, res, next) => {
  const newStates = new States(req.body);
  try {
    const state = await newStates.save();
    const { _id: statesId, division } = state;

    const ress = await Division.updateOne(
      { _id: division.id },

      { $push: { states: statesId } }
    );
    res.status(200).json(state);
  } catch (err) {
    next(err);
  }
};

export const getStates = async (req, res, next) => {
  try {
    const state = await States.find({}).populate("division");
    res.status(200).json(state);
  } catch (err) {
    next(err);
  }
};
export const getSingleStates = async (req, res, next) => {
  try {
    const result = await States.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
export const deleteStates = async (req, res, next) => {
  try {
    const state = await States.findByIdAndDelete(req.params.id);
    res.status(200).json(state);
  } catch (err) {
    next(err);
  }
};
export const updateStates = async (req, res, next) => {
  try {
    const state = await States.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(state);
  } catch (err) {
    next(err);
  }
};
