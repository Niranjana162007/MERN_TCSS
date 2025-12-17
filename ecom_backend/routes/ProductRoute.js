const express = require("express");
const { getProduct, postProduct, deleteProduct, updateProduct, deleteAllProducts } = require("../controller/ProductController");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const router = express.Router();

router.get("/", getProduct)
router.post("/postProduct", upload.single('image'), postProduct)
router.delete("/deleteProduct/:id", auth, deleteProduct)
router.delete("/deleteAll", deleteAllProducts)
router.put("/updateProduct/:id", auth, updateProduct)

module.exports = router;