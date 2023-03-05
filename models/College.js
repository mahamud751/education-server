import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const CollegesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },

    address: {
      type: String,
    },
    mail_id: {
      type: String,
    },
    established_date: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    division: {
      id: {
        type: ObjectId,
        ref: "Division",
        required: true,
      },
    },
    states: {
      id: {
        type: ObjectId,
        ref: "States",
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("College", CollegesSchema);
