import express from "express";
import { getProductById, getProducts } from "../controller/productController.js";

const router = express.Router()

router.get("/products" , getProducts)
router.get('/product/:id', getProductById)

export default router