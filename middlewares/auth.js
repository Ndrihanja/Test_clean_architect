import User from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_JWT_CODE = "psmR3HuOihHKfqZymo1m";
const salt = bcrypt.genSaltSync(10);

// Middleware pour vérifier l'authentification de l'utilisateur
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Token d'authentification manquant");
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).send("Token d'authentification invalide");
    }
    req.user = decoded;
    next();
  });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!req.body.email || !req.body.password) {
    res.json({ success: false, error: "Entrez les bonnes valeurs" });
    return;
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Une erreur est survenue, veuillez réessayer plus tard",
    });
  }
  if (existingUser) {
    return res.status(400).json({ message: "Cet user exist déjà!" });
  }

  const hashedPassword = bcrypt.hashSync(password, salt);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign(
      {
        email: savedUser.email,
      },
      SECRET_JWT_CODE
    );
    return res.status(201).json({
      token: token,
      user: { _id: savedUser.id, name: savedUser.name, email: savedUser.email },
    });
  } catch (error) {
    return console.log(error);
  }
};

export const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let isPasswordValid;

  console.log("Email et mot de passe : " + email + " " + password);
  if (!email || !password) {
    return res.status(400).send("Email et mot de passe requis");
  }
  // Find the user with the given email address
  const user = await User.findOne({ email }).select(
    "+_id +name +password +email"
  );

  if (!user) {
    return res.status(401).send("Email ou mot de passe incorrect");
  }

  isPasswordValid = await bcrypt.compare(password, user.password);

  // Check the password
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = jwt.sign({ email: email }, SECRET_JWT_CODE);
  return res.status(201).json({
    token: token,
    user: { _id: savedUser.id, name: savedUser.name, email: savedUser.email },
  });
  //   User.findOne({ email: email, password: password }, (err, user) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send("Erreur serveur");
  //     }
  //     if (!user) {
  //       return res.status(401).send("Email ou mot de passe incorrect");
  //     }
  //     const token = jwt.sign({ email: email }, secret);
  //     return res.status(201).json({ token: token });
  //   });
};
