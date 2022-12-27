const mongoose = require("mongoose");
const articlesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
      required: [true, "please add a thumbnail"],
      default: "/assets/images/react.png",
    },
    content: {
      type: String,
      required: [true, "please add a content"],
      minlength: 50,
      maxLength: 3000,
    },
  },
  {
    timestamps: true,
  }
);
