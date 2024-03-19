import express from "express";
import cookieParser from "cookie-parser";
import customerRouter from "./routes/customerRoute.js";

const port = process.env.PORT || 5002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());
// debugger;
app.use("/customers", customerRouter);

// app.get('/', async  (req, res) => {
//     pool.query('SELECT * FROM customers', (err, res) => {
//         if (err) {
//           console.error('Error executing query', err);
//           return;
//         }
//         console.log('Query result:', res.rows);
//       });
//     res.send("API is Running")
// });

app.listen(port, () => console.log(`server is running on port ${port}`));
