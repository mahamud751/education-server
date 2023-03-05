import Course from "../models/Course.js";

export const CreateCourse = async (req, res, next) => {
  const newCourse = new Course(req.body);
  try {
    const course = await newCourse.save();
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.find({});
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
export const getSingleCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};
