const express = require("express");
const {
  getArticles,
  createArticles,
} = require("./../controllers/articlesControllers");
const { createPostValidator } = require("./../middlewares/formValidator");

const router = express.Router();

router.get("/api/articles/get-article", getArticles);
router.post(
  "/api/articles/create-article",
  createPostValidator,
  createArticles
);

module.exports = router;
