import mongoose from "mongoose";

const Schema = mongoose.Schema;
const AchatSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  capsule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Capsule",
  },
  date_achat: {
    type: Date,
  },
  prix_total: {
    type: mongoose.Schema.Types.Decimal128,
    required: false,
  },
  emplacement: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Achat", AchatSchema);
