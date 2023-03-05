import College from "../models/College.js";
export const CreateCollege = async (req, res, next) => {
  const {
    name,
    division,
    states,
    address,
    established_date,
    mail_id,
    status,
    img,
  } = req.body;
  const newData = new College({
    name,
    division,
    states,
    address,
    established_date,
    mail_id,
    status,
    img,
  });
  try {
    const college = await newData.save();
    res.status(200).json(college);
  } catch (err) {
    next(err);
  }
};

export const getCollege = async (req, res, next) => {
  try {
    const college = await College.find({})
      .populate("division", "name")
      .populate("states", "name");
    res.status(200).json(college);
  } catch (err) {
    next(err);
  }
};
export const getSingleCollege = async (req, res, next) => {
  try {
    const college = await College.findById(req.params.id).populate("products");
    res.status(200).json(college);
  } catch (err) {
    next(err);
  }
};
export const deleteCollege = async (req, res, next) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    res.status(200).json(college);
  } catch (err) {
    next(err);
  }
};

export const updateCollege = async (req, res, next) => {
  try {
    const college = await College.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(college);
  } catch (err) {
    next(err);
  }
};
