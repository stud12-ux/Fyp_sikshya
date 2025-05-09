import mongoose, { Schema } from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    name: { type: String, required: true },
    pdf: { type: Buffer, required: true }, // Now stores binary PDF data
    desc: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", noteSchema);
export default Notes;
