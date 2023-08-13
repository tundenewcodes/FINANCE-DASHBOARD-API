import express from "express";
import { connectDB } from "./config/dbConnect.js";
const app = express();
import bodyParser from "body-parser";
const PORT = process.env.PORT || 3500;

import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";




import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions } from "./data/data.js";

import mongoose from "mongoose";

// configuration
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/* ROUTES */

// import AffiliateStat from "./models/AffiliateStat.js";


app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL, PORT);
    app.listen(PORT, console.log(`server is running on PORT : ${PORT}`));
    //await mongoose.connection.db.dropDatabase();
    //KPI.insertMany(kpis);
    //  Product.insertMany(products);
    //  Transaction.insertMany(transactions);
  } catch (err) {
    console.log(err);
  }
};
start();
