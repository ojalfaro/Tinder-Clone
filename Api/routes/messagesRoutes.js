import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  sendMessage,
  getConversation,
} from "../controllers/messageController.js";

const router = Router();

router.use(protectRoute);

router.post("/send", sendMessage);
router.get("/conversation/:userId", getConversation);

export default router;
