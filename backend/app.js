import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
    console.log("Received request:", req.body); // Log the request body for debugging
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }
    try {
        await sendEmail({
            email: "mohdasad38237@gmail.com",
            subject: "GYM WEBSITE",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully"
        });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
