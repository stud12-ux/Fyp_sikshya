// /controllers/commentController.ts

import Comments from "../models/commentModel.js"; // your comment model
import Books from "../models/bookModel.js";       // your book model
import Notes from "../models/noteModel.js";       // your note model

// GET Comments
export const getComments = async (req, res) => {
    try {
        const { bookId } = req.query;

        const bookComments = await Comments.find({ noteId: bookId })
            .populate({
                path: "userId",
                select: "firstName lastName", // only select necessary fields
            })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Fetched comments successfully",
            data: bookComments,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

// POST Comment
export const commentBook = async (req, res) => {
    try {
        const { comment, userId, noteId } = req.body;

        if (!comment) {
            return res.status(400).json({ message: "Comment cannot be empty" });
        }

        if (!noteId) {
            return res.status(400).json({ message: "Note ID is required" });
        }

        const newComment = new Comments({
            comment,
            userId,
            noteId,
        });

        await newComment.save();

        // Update the Note by pushing comment ID into comments array
        const note = await Notes.findById(noteId);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        note.comments.push(newComment._id);
        await note.save();

        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: newComment
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
