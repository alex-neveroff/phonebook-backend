import { controllerWrapper } from "../../decorators/index.js";
import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";

const addContact = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner });
  if (!newContact) {
    throw HttpError(400);
  }
  res.status(201).json(newContact);
};

export default controllerWrapper(addContact);
