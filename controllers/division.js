import Division from "../models/Division.js";

export const CreateDivision = async (req, res, next) => {
  const newDivision = new Division(req.body);
  try {
    const category = await newDivision.save();
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const getDivision = async (req, res, next) => {
  try {
    const division = await Division.find({}).populate("states");
    res.status(200).json(division);
  } catch (err) {
    next(err);
  }
};
export const getSingleDivision = async (req, res, next) => {
  try {
    const division = await Division.findById(req.params.id).populate("states");
    res.status(200).json(division);
  } catch (err) {
    next(err);
  }
};
export const deleteDivision = async (req, res, next) => {
  try {
    const division = await Division.findByIdAndDelete(req.params.id);
    res.status(200).json(division);
  } catch (err) {
    next(err);
  }
};

export const updateDivision = async (req, res, next) => {
  try {
    const division = await Division.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(division);
  } catch (err) {
    next(err);
  }
};
