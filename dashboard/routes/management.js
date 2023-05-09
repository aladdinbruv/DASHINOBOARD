import  Express  from "express";
import { getAdmins,getUserPerformance } from "../controllers/management.js";
const router = Express.Router();
router.get("/admins", getAdmins);
router.get("/performance/:id",getUserPerformance);
export default router;