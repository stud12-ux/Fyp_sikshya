import express from "express";

import { commentBook, getComments } from "../controllers/commentController.js";



const router = express.Router();

router.get("/get-comments", getComments);
router.post("/commentBook", commentBook);


export default router;
