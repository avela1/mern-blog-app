import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-6">
          {articles.map((article, index) => (
            <div
              key={index}
              class="bg-white md:w-2/5 dark:bg-slate-800 rounded-lg  ring-1 ring-slate-900/5 shadow-xl m-4"
            >
              <Link to={`/articles/${article.name}`}>
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center  rounded-lg"
                  src={article.thumbnail}
                  alt="blog"
                />
              </Link>
              <div className="p-6">
                <h3 class="text-slate-900 dark:text-white  text-base font-medium tracking-tight">
                  {article.title}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  {article.content[0].substring(0, 120)}...
                </p>
              </div>
              <div className="flex item-center flex-wrap p-6">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  to={`/articles/${article.name}`}
                >
                  {" "}
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
