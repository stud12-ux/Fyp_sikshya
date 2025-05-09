import express from "express";

import { changePassword, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/reset-password", changePassword);
router.put("/update-user", updateUser);
router.delete("/:id", deleteUser);

export default router;
