import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Add CORS
app.use(cors());

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use(express.json()); // Parse Http Requests
app.use(express.urlencoded({ extended: true }));

const dbURI = process.env.MONGO_DB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Connected DB!"));

// User Routes
app.use('/api/users', userRouter);

// Product Routes
app.use('/api/products', productRouter);

// Order Routes
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/', (req, res) => {
    res.send("It works")
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "frontend", "build", "index.html"));
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
