import { controllerWrapper } from "../../decorators/index.js";

const getMessage = async (req, res) => {
  const message = `<p>This repository is a Backend part of the Phonebook project, which is designed to create, edit and filter your phone contacts. The backend is required to interact with the frontend part of Phonebook.</p>
   <p> <a href="https://github.com/alex-neveroff/phonebook" target="_blank">Frontend GitHub</a></p>
   <p> <a href="https://alex-neveroff.github.io/phonebook" target="_blank">Frontend Deploy</a></p>
   <p> <a href="https://github.com/alex-neveroff/phonebook-backend" target="_blank">Backend GitHub</a></p>
   <p> <a href="https://phonebook-backend-kyyd.onrender.com" target="_blank">Backend Deploy</a></p>
   <p> <a href="https://phonebook-backend-kyyd.onrender.com/api-docs/" target="_blank">Swagger</a></p>
    `;
  res.send(message);
};

export default controllerWrapper(getMessage);
