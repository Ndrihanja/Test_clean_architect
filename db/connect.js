import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ip = process.env.IP_ADDRESS;
const port = process.env.PORT || 5000;
const url_mongoose = process.env.URL_MONGOOSE;


const initDB = async () => {
  try {
    await mongoose.connect(url_mongoose);
    console.log("Connexion réussie à la base de données");
  } catch (err) {
    console.log(err);
  }
};
export { ip, port, initDB };
