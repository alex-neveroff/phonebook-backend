import { Schema, model } from "mongoose";
import { handleMongooseError } from "../middlewars/index.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name for the contact is required"],
    },
    number: {
      type: String,
      required: [true, "Number for the contact is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

export default Contact;
