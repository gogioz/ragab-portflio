import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FeaturedArticles(lang) {
  const language = lang.lang.lang;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://ragaboz.vercel.app/articles")
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-[#ebebec] text-[#3b3b3d] flex flex-col justify-center items-center 4xl:w-full">
      <h2
        className={`text-center sm:text-3xl sm:py-6 font-${
          language === "en" ? "Amiri" : "Droid"
        }-Bold  text-[#1e1e1f] md:text-3xl xl:text-4xl xl:py-10 4xl:text-[44px]`}
      >
        {language === "en" ? "Featured Articles" : "أهم المقالات"}
      </h2>
      <div className="flex flex-col  sm:px-4 sm:space-y-4 md:px-2 sm:pb-4 md:pb-6  md:space-y-6 justify-center items-center   md:w-[100%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] xl:pb-12 xl:space-y-10 4xl:w-[70%] 5xl:w-[80%]">
        {articles
          .slice(-4)
          .reverse()
          .map((article) => (
            <Link
              to={`highlights/${article._id}`}
              className={`sm:m-0 bg-white lg:m-2  flex sm:flex-col md:flex-row ${
                language === "en" ? "sm:flex-row" : "sm:flex-row-reverse"
              }    hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer `}
              key={article._id}
            >
              <div className="sm:w-[100%] md:w-[40%] lg:w-[40%]  4xl:max-w-[30%] flex flex-none ">
                <img
                  src={`../../../public/${article.image[0]}`}
                  className=" "
                  alt=""
                />
              </div>
              <div className="flex flex-col flex-1 justify-around sm:gap-y-1 sm:px-1 sm:py-1   sm:pl-1  md:px-1 md:py-0 md:gap-y-0 lg:gap-y-2">
                <h2
                  className={` font-${
                    (language === "en" && article.title) ||
                    (language === "ar" && !article.titleTrans)
                      ? "Amiri"
                      : "Droid"
                  }-Bold line-clamp-1 sm:px-2 sm:pt-3  md:px-0 md:pt-1 lg:px-1   ${
                    (language === "en" && article.title) ||
                    (language === "ar" && !article.titleTrans)
                      ? "sm:text-2xl md:text-xl xl:text-3xl 5xl:text-4xl"
                      : "sm:text-xl md:text-sm lg:text-2xl xl:2xl 5xl:text-[34px] 5xl:leading-loose"
                  }  `}
                  dir={`${article.title ? "" : "rtl"}`}
                >
                  {language === "en"
                    ? `${
                        article.title ? `${article.title}` : article.titleTrans
                      }`
                    : `${
                        article.titleTrans ? article.titleTrans : article.title
                      }`}
                </h2>

                <p
                  className={`font-${
                    (language === "en" && article.description) ||
                    (language === "ar" && !article.descriptionTrans)
                      ? "Amiri"
                      : "Droid"
                  }-Regular  text-[#3b3b3d] sm:px-3 sm:line-clamp-5  lg:line-clamp-5   4xl:line-clamp-[6]    ${
                    (language === "en" && article.description) ||
                    (language === "ar" && !article.descriptionTrans)
                      ? "sm:text-lg md:text-md md:line-clamp-3 xl:text-2xl xl:leading-8"
                      : "sm:text-md md:text-sm md:line-clamp-4 lg:text-md  lg:leading-normal xl:text-xl xl:leading-7"
                  } xl:tracking-tight `}
                  dir={`${article.title ? "" : "rtl"}`}
                >
                  {article.description
                    ? article.description.replaceAll("$")
                    : article.descriptionTrans.replaceAll("$")}
                </p>
                <p
                  className={`font-Amiri-Regular  sm:text-md md:text-sm xl:text-lg ${
                    language === "en"
                      ? `${article.title ? "self-end pr-1" : "self-start pl-1"}`
                      : `${
                          article.titleTrans
                            ? "self-start pl-1"
                            : "self-end pr-2"
                        }`
                  } `}
                >
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default FeaturedArticles;
