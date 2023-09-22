import { User, Session } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";
import { controllerWrapper } from "../../decorators/index.js";
import { tokenTime } from "../../constants/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw HttpError(401, "Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: tokenTime });

  await Session.create({ token, email, display });

  res.json({
    token: token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

export default controllerWrapper(login);
