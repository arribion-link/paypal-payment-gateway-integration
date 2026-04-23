import express from "express";
import "dotenv/config";

const app = express();
import createOrder from "./services/paypal.js";
const PORT = process.env.PORT;
if (!PORT) {
    console.log("Error accessing connection port..");
    process.exit(1);
}

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

app.post("/pay", async (req, res) => {
    try {
        const url = await createOrder();
        res.redirect(url);
    } catch (error) {
        console.log("Pay Error:", error)
    }
});
app.get("/complete-order", (req, res) => {
    res.send("Complete Order")
});
app.get("/cancel-order", (req, res) => {
  res.send("Complete Order");
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})