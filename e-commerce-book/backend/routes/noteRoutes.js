import express from "express";

import { UploadBook, UploadNote, UserUploadBooks, UserUploadNotes, fetchBooks, fetchNotes, ViewNotePDF } from "../controllers/bookController.js";

const router = express.Router();

// Route to upload a PDF/book
router.post("/upload-pdf", UploadNote);

// Route to get all notes
router.get("/fetch-notes", fetchNotes);
router.get("/user-upload", UserUploadNotes);
router.post("/upload-book", UploadBook);

// Route to get all notes
router.get("/fetch-books", fetchBooks);
router.get("/user-upload-books", UserUploadBooks);
router.get("/view-pdf/:id", ViewNotePDF);


export default router;
