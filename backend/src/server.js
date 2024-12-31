import express from "express";
import connectDb from "./db/db.js";
import dotenv from "dotenv";
import path from "path";
import route from "./routes/product.route.js";

const app = express();

dotenv.config();

app.use(express.json()); //allow us to accept json data in the req.body

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use("/api/products", route);

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`\n🛞  Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });