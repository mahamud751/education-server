import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },

    division: {
      id: {
        type: ObjectId,
        ref: "Division",
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("States", StateSchema);
