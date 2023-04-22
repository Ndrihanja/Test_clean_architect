import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ImageProd", ImageSchema);
