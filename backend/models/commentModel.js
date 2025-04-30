import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "Users" },
        noteId: { type: Schema.Types.ObjectId, ref: "Notes",  },
        comment: { type: String, required: true },



    },
    { timestamps: true }
);

const Comments = mongoose.model("Comments", commentSchema);

export default Comments;
