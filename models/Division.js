import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const DivisionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    states: [
      {
        type: ObjectId,
        ref: "States",
      },
    ],
    college: {
      id: {
        type: ObjectId,
        ref: "College",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Division", DivisionSchema);
