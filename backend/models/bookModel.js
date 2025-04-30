import mongoose, { Schema } from "mongoose";



const bookSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    filename: { type: String, required: true }, // corrected from "name"
    image: { type: String, required: true },
    course: { type: String, required: true },
    language: { type: String, required: true },
    type: { type: String, required: true },

    desc: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  },
  { timestamps: true }
);




const Books = mongoose.model("Books", bookSchema);
export default Books;
