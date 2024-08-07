import { Router } from "express";
import { loginUser,  refreshAccessToken, getCurrentUser, registerUser } from "../Controllers/User.js";
import { verifyJWT } from "../Middlewares/auth.js";

const router = Router()

    router.route("/register").post(registerUser)

    router.route("/login").post(loginUser)

    router.route("/refresh-token").post(getCurrentUser)

    router.route("/currentuser").get(refreshAccessToken)

    
    export default router