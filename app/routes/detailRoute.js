import express from "express";
import { detailIkan, allIkan } from "../controller/detailController.js";
const router = new express.Router();

router.post("/detail", detailIkan);
router.get("/all", allIkan);

export default router;
