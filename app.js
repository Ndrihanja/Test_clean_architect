import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { ip, port, initDB } from "./db/connect.js";
import produit from "./routes/produit.routes.js";
import data from "./routes/data.routes.js";
import auth from "./routes/auth.routes.js";
//instance of new express app
const app = express();

//middleware for encodage response and request body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//gestion cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Controll-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Route principal
app.use("/api/auth", auth);
app.use("/api/product", produit);
app.use("/api/data", data);

initDB().then(() => {
  app.listen(port, ip, () => {
    console.log(
      `Le serveur est démarré sur le port ${port} avec l'adresse ${ip}`
    );
  });
});
