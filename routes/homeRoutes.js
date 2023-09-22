import express from "express";
import { getMessage } from "../controllers/index.js";

const homeRoutes = express.Router();

homeRoutes.get("/", getMessage);

export default homeRoutes;
