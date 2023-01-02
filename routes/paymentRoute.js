import { Router } from "express";
import { addPaymentGateway } from "../controller/paymentController.js";

const router = Router();

router.post('/payment', addPaymentGateway)

export default router