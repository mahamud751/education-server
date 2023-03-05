import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    course_fees: {
      type: String,
    },
    course_duration_time: {
      type: String,
    },

    course_duration: {
      type: String,
      enum: ["year", "month"],
      default: "active",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
