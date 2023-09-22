import { controllerWrapper } from "../../decorators/index.js";
import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";

const deleteContact = async (req, res) => {
  const { contactId } = req.params;

  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    throw HttpError(404, "No contact found");
  }

  res.json(deletedContact);
};

export default controllerWrapper(deleteContact);
