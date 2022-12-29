const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
// const morgan = require("morgan");

const routes = require("./routes/articlesRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
// app.use(morgan("start"));

// Routes
app.use("/", routes);

const port = process.env.PORT || 8080;

// Connect to atlass db and start server
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`listening from port ${port}`));
  })
  .catch((err) => console.log(err));

// app.get("/api/articles/:name", async (req, res) => {
//   try {
//     const articleName = req.params.name;
//     const client = await MongoClient.connect("mongodb://localhost:27017");
//     // const db = client.db("mernblog");
//     // const articlesInfo = await db
//     //   .collection("articles")
//     //   .find({ name: articleName });
//     res.status(200).json(articleName);
//     client.close();
//   } catch (error) {
//     res.status(500).json({ message: "Error connecting to Mongodb", error });
//   }
// });
// app.post("/api/articles/:name/add-comment", (req, res) => {
//   const { username, comment } = req.body;
//   const articleName = req.params.name;

//   articlesInfo[articleName].comments.push({ username, comment });
//   res.status(200).send(articlesInfo[articleName]);
// });
