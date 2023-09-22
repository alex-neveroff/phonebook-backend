import { controllerWrapper } from "../../decorators/index.js";
import { Contact } from "../../models/index.js";

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const allContacts = await Contact.find({ owner }, "-createdAt -updatedAt");
  res.json(allContacts);
};

export default controllerWrapper(getAllContacts);
