import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/AuthMiddleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", authMiddleware, AuthController.logout);
router.get("/profile", authMiddleware, AuthController.profile);
router.get("/is-authenticated", AuthController.checkAuth);
router.put("/", authMiddleware, AuthController.update);

export default router;