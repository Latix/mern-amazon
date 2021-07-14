import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

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

app.get('/', (req, res) => {
    res.send("Server is ready")
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

app.listen(5000, () => {
    console.log("Serve at http://localhost:5000")
});
