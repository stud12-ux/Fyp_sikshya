import Notes from "../models/noteModel.js";
import Books from "../models/bookModel.js";


// GET /note/view-pdf/:id
export const ViewNotePDF = async (req, res) => {
    try {
      const note = await Notes.findById(req.params.id);
      if (!note || !note.pdf) {
        return res.status(404).send("PDF not found");
      }
  
      res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline", // or "attachment" to force download
      });
      res.send(note.pdf);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving PDF");
    }
  };
  
export const UploadNote = async (req, res) => {
    try {
        const { userId, name, pdf, desc } = req.body;

        const existingNote = await Notes.findOne({ name });
        if (existingNote) {
            return res.status(400).json({
                success: false,
                message: "Note with this name already exists",
            });
        }

        // Decode base64 PDF string to binary
        const base64Data = pdf.replace(/^data:application\/pdf;base64,/, "");
        const pdfBuffer = Buffer.from(base64Data, "base64");

        const newNote = new Notes({
            userId,
            name,
            pdf: pdfBuffer, // storing binary data
            desc,
        });

        await newNote.save();

        res
            .status(201)
            .json({ success: true, message: "Note Uploaded Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const UploadBook = async (req, res) => {
    try {
        const { userId, filename, course, language, type, image, desc } = req.body;

        const existingbook = await Books.findOne({ filename });
        if (existingbook) {
            return res.status(400).json({ success: false, message: "Note with this name already exists" });
        }

        const newBook = new Books({ userId, filename, course, language, type, image, desc });
        await newBook.save();

        res.status(201).json({ success: true, message: "Book Uploaded Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

export const fetchNotes = async (req, res) => {
    try {
        const notes = await Notes.find();

        if (!notes || notes.length === 0) {
            return res.status(404).json({ message: 'No notes available' });
        }
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
};
export const fetchBooks = async (req, res) => {
    try {
        const books = await Books.find();

        if (!books || books.length === 0) {
            return res.status(404).json({ message: 'No notes available' });
        }
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
};
export const UserUploadNotes = async (req, res) => {
    try {
        const { id } = req.query;

        const notes = await Notes.find({ userId: id }).sort({ createdAt: -1 });

        if (!notes || notes.length === 0) {
            return res.status(404).json({ message: "No notes Uploaded" });
        }

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error });
    }
};

export const UserUploadBooks = async (req, res) => {
    try {
        const { id } = req.query;

        const books = await Books.find({ userId: id }).sort({ createdAt: -1 });

        if (!books || books.length === 0) {
            return res.status(404).json({ message: "No notes Uploaded" });
        }

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error });
    }
};





