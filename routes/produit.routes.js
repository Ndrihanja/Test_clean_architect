import express from "express";
import { getAllProduct, saveProduct } from "../controllers/produit.controller";
import { uploadMiddleware } from "../middlewares/MulterMiddleware";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileType = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileType.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({ storage, fileFilter });
const router = express.Router();

router.post("/create-product", uploadMiddleware.single("photo"), saveProduct);
router.get("/", getAllProduct);

export default router;
