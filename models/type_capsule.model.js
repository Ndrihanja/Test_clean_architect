import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TypeCapsuleSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  taille: {
    type: Number,
    required: false,
  },
  prix_capsule: {
    type: mongoose.Schema.Types.Decimal128,
    required: false,
  },
  nombre_membre: {
    type: Number,
    required: false,
  },
  capsule: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Capsule",
    },
  ],
});

export default mongoose.model("Typecapsule", TypeCapsuleSchema);
