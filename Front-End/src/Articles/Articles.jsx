import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Articles(lang) {
  const language = lang.lang;
  console.log(lang);
  const [renderedData, setRenderedData] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://ragaboz.vercel.app/articles")
      .then((res) => {
        setArticles(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const reversedData = articles ? [...articles].reverse() : "";
    if (reversedData.length > 0) {
      setRenderedData(reversedData.slice(0, 6));
    }
  }, [articles]);

  const handleLoadMore = () => {
    const reversedData = articles ? [...articles].reverse() : "";

    const nextData = reversedData.slice(
      renderedData.length,
      renderedData.length + 3
    );
    setRenderedData([...renderedData, ...nextData]);
  };

  return (
    <div className="sm:mx-1 lg:mx-6 sm:py-2 xl:mx-10 4xl:mx-10  flex flex-col justify-center items-center">
      <div
        className={`grid sm:grid-cols-1 sm:gap-x-0 sm:gap-y-8   lg:gap-x-8 lg:grid-cols-[repeat(2,minmax(0,_1fr))]  2xl:grid-cols-[repeat(3,minmax(0,_500px))]  5xl:gap-x-[80px] 5xl:gap-y-[60px] pb-6 `}
        dir={language === "en" ? "ltr" : "rtl"}
      >
        {renderedData.map((article) => (
          <Link
            className=" bg-white  text-[#1e1e1f] hover:cursor-pointer  transition-transform duration-200  hover:-translate-y-1 flex flex-col "
            key={article._id}
            to={`/articles/${article._id}`}
          >
            <img
              src={`../../public/${article.image[0]}`}
              alt=""
              className=" w-[100%]"
            />

            <div className="sm:py-1 sm:px-2 5xl:px-5  flex flex-col justify-around">
              <h3
                className={`${
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? "sm:text-2xl 5xl:text-3xl"
                    : "sm:text-xl 5xl:text-2xl"
                } line-clamp-1
               font-${
                 (language === "en" && article.description) ||
                 (language === "ar" && !article.descriptionTrans)
                   ? "Amiri"
                   : "Droid"
               }-Bold sm:leading-loose
                `}
                dir={
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? "ltr"
                    : "rtl"
                }
              >
                {language === "en"
                  ? `${article.title ? `${article.title}` : article.titleTrans}`
                  : `${
                      article.titleTrans ? article.titleTrans : article.title
                    }`}
              </h3>

              <p
                className={`   font-${
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? "Amiri"
                    : "Droid"
                }-Regular  text-[#063242] line-clamp-5 ${
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? "sm:text-lg 5xl:text-2xl"
                    : "sm:text-md 5xl:text-xl 5xl:leading-relaxed "
                } `}
                dir={
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? "ltr"
                    : "rtl"
                }
              >
                {language === "en"
                  ? `${
                      article.description
                        ? `${article.description}`
                        : article.descriptionTrans
                    }`
                  : `${
                      article.descriptionTrans
                        ? article.descriptionTrans
                        : article.description
                    }`}
              </p>
              <p
                className={` ${
                  (language === "en" && article.description) ||
                  (language === "ar" && !article.descriptionTrans)
                    ? `${
                        language === "ar" && article.title
                          ? "self-start pl-1"
                          : "self-end pr-1 "
                      }`
                    : `${
                        article.titleTrans ? "self-start pl-1" : "self-end pr-1"
                      }`
                }  font-Amiri-Regular text-lg`}
              >
                {article.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {articles
        ? articles.length > renderedData.length && (
            <button
              className="w-full p-2 font-semibold rounded-md bg-[#212529] text-white self-center hover:-translate-y-0.5 transation duration-150  hover:cursor-pointer  lg:w-[10%] sm:w-[50%] mt-3 mb-6"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )
        : ""}
    </div>
  );
}

export default Articles;
