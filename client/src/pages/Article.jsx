import React from "react";
import { useParams } from "react-router-dom";

import Articles from "../components/Articles";

import NotFound from "./NotFound";

import articleContent from "./../models/article-content";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter((art) => art.name !== name);
  if (!article) <NotFound />;
  return (
    <div className="">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {" "}
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Other Articles
      </h1>
      <Articles articles={otherArticles} />
    </div>
  );
};

export default Article;
