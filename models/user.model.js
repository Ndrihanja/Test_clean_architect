import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  capsule: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Capsule",
    },
  ],
  achat: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Achat",
    },
  ],
});

export default mongoose.model("User", UserSchema);
