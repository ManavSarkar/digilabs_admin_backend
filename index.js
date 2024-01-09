const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
dotenv.config();
const app = express();

const database = require("./database/database");
const userRouter = require("./routes/user");

const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: [
            "https://digilabs-landing-frontend.vercel.app",

        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
