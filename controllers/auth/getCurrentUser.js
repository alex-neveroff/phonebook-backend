import { controllerWrapper } from "../../decorators/index.js";

const getCurrent = async (req, res) => {
  const { name, email } = req.user;
  res.json({
    name,
    email,
  });
};

export default controllerWrapper(getCurrent);
