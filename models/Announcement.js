import mongoose from "mongoose";
const AnnouncementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: true
      },
 
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", AnnouncementSchema);
