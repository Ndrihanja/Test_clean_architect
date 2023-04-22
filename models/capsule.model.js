import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CapsuleSchema = new Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  durre: {
    type: Number,
    required: false,
  },
  type_capsule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Typecapsule",
  },
  date_lancement: {
    type: Date,
    required: false,
  },
  achat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Achat",
    },
  ],
});

export default mongoose.model("Capsule", CapsuleSchema);
