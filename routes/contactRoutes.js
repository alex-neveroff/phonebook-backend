import express from "express";
import { validateBody } from "../decorators/index.js";
import { authenticate, isEmptyBody, isValidId } from "../middlewars/index.js";
import {
  addContact,
  deleteContact,
  updateContact,
  getAllContacts,
} from "../controllers/index.js";
import { updateContactSchema, addContactSchema } from "../schemas/index.js";

const contactRouter = express.Router();
contactRouter.use(authenticate);

contactRouter.get("/", getAllContacts);

contactRouter.post(
  "/",
  isEmptyBody,
  validateBody(addContactSchema),
  addContact
);
contactRouter.put(
  "/:contactId",
  isEmptyBody,
  isValidId("contactId"),
  validateBody(updateContactSchema),
  updateContact
);
contactRouter.delete("/:contactId", isValidId("contactId"), deleteContact);

export default contactRouter;
