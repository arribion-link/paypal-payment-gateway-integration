import express from "express";
import "dotenv/config";

const app = express();
// import generateAccessToken from "./services/paypal.js";
const PORT = process.env.PORT;
if (!PORT) {
    console.log("Error accessing connection port..");
    process.exit(1);
}

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})