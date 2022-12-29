const Article = require("./../models/articles");

exports.getArticles = (req, res) => {
  const articles = Article.find()
    .select("_id name title content thumbnail")
    .then((articles) => res.json({ articles }))
    .catch((err) => console.log(err));
};

exports.createArticles = (req, res) => {
  const article = new Article(req.body);

  article.save().then((result) => {
    res.json({ article: result });
  });
};
