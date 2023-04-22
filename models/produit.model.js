import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  unite_price: {
    type: mongoose.Schema.Types.Decimal128,
    required: false,
  },
  quantity: {
    type: Number,
    default: 0,
    required: false,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImageProd",
    },
  ],
});

export default mongoose.model("Produit", ProduitSchema);
