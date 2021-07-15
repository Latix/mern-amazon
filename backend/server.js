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

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(express.json()); // Parse Http Requests
app.use(express.urlencoded({ extended: true }));

const dbURI = "mongodb+srv://kamsi:Password123@cluster0.9hlj4.mongodb.net/amazon?retryWrites=true&w=majority";

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
    res.send("Server is ready")
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Serve at http://localhost:5000")
});
