exports.createPostValidator = (req, res, next) => {
  req.check("title", "enter a title").notEmpty();
  req.check("name", "enter a name").notEmpty();
  req.check("thumbnail", "enter thumbnail path").notEmpty();
  req.check("content", "enter the content description").notEmpty();
  req.check("content", "content must be between 50 t0 3000 words").isLength({
    min: 50,
    max: 3000,
  });

  const error = req.validationErrors();
  if (error) {
    const firstError = error.map((err) => err.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
