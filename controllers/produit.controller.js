import produitModel from "../models/produit.model";
import ImageProd from "../models/produitIm.model";

export const saveProduct = async (req, res, next) => {
  try {
    const photo = req.file.filename;
    console.log("Body file content : " + photo);
    const image = new ImageProd({
      filename: req.file.filename,
      originalName: req.file.originalname,
      contentType: req.file.mimetype,
    });
    console.log("Image : " + image);
    image.save();
    return res.status(200).json(image);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur du serveur" });
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const allProductImg = await ImageProd.find();
    return res.status(200).json(allProductImg);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur du serveur" });
  }
};
