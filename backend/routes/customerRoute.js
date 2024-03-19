import express from "express";
import {
  getCustomerRecords,
  populateDummyData,
} from "../controllers/customerController.js";

const router = express.Router();

router.route("/").get(getCustomerRecords).post(populateDummyData);

export default router;
