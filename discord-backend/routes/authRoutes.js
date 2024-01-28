import express from "express";
const router = express.Router();
import * as authControllers from "../controllers/auth/authControllers.js";
import Joi from "joi";
import validation from "express-joi-validation";
import auth from "../middleware/auth.js";
const validator = validation.createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(6).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.postRegister
);
router.post("/login", validator.body(loginSchema), authControllers.postLogin);

//test route to protected path
router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

export default router;
