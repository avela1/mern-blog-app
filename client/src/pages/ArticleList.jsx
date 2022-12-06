import React from "react";
import Articles from "../components/Articles";

import articlesContent from "./../models/article-content";

const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Articles List
      </h1>
      <Articles articles={articlesContent} />
      
    </div>
  );
};

export default ArticleList;
