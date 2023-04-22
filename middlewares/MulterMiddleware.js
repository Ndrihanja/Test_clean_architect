import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileType = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "video/mp4",
    "video/avi",
    "video/mpeg",
    "application/pdf",
  ];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const uploadMiddleware = multer({ storage, fileFilter });
