import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  swipeRight,
  swipeLeft,
  getMatches,
  getUserProfiles,
} from "../controllers/matchController.js";

const router = Router();

router.post("/swipe-right/:likedUserId", protectRoute, swipeRight);
router.post("/swipe-left/:dislikedUserId", protectRoute, swipeLeft);

router.get("", protectRoute, getMatches);
router.get("/user-profiles", protectRoute, getUserProfiles);

export default router;
