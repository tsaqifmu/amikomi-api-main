import express from "express";
import { detailIkan } from "../controller/detailController.js";
const router = new express.Router();

router.get("/detail", detailIkan);
// router.post("/all", all);

export default router;
