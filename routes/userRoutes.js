import express from "express"
import { Login, signUp } from "../controller/userController.js";

const router = express.Router();

router.post('/signup', signUp)
router.post('/login', Login)

export default router