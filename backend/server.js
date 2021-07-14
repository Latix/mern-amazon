import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

const dbURI = "mongodb+srv://kamsi:Password123@cluster0.9hlj4.mongodb.net/amazon?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Connected DB!"));

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find(x => x._id === req.params.id);
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ message: "Product not Found" });
//     }
    
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

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
