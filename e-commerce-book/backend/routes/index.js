import express from "express";
import authRoute from "./authRoutes.js";
import noteRoute from "./noteRoutes.js";
import userRoute from "./userRoutes.js"
import commentRoute from "./commentRoutes.js"
// import userRoute from "./userRoutes.js";

const router = express.Router();

router.use(`/auth`, authRoute); //auth/register
router.use(`/note`, noteRoute);
router.use(`/user`, userRoute);
router.use(`/comment`, commentRoute);
// router.use(`/posts`, postRoute);

export default router;
