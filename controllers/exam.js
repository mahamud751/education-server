import Exam from "../models/Exam.js";

export const CreateExam = async (req, res, next) => {
  const newExam = new Exam(req.body);
  try {
    const exam = await newExam.save();
    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};
export const getExam = async (req, res, next) => {
  try {
    const exam = await Exam.find({});
    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};
export const getSingleExam = async (req, res, next) => {
  try {
    const exam = await Exam.findById(req.params.id);
    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};
export const deleteExam = async (req, res, next) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};

export const updateExam = async (req, res, next) => {
  try {
    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(exam);
  } catch (err) {
    next(err);
  }
};
