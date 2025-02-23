import express from 'express'
const router = express.Router();
import { deleteProduct, getProduct, postProduct, updateProduct } from '../controllers/productControllers.js';


router.post('/', postProduct)

router.delete('/:id', deleteProduct)

router.get('/', getProduct)

router.put("/:id", updateProduct)

export default router;