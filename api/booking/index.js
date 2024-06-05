import express from "express";
import path from "path";
import { create as createController } from "./booking.controller.js";

var router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(path.resolve("./client/booking.html"))
})
router.post('/', (req,res) => {
    const {email, latitude, longitude } = req.body;
    console.log(`승객 ${email}의 위치${latitude},${longitude}로 주변 택시를 겁색해보자`)
})
router.post('/', createController);


export default router;