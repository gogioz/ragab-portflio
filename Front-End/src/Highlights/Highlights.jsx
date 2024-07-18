import { useState } from "react";
import Articles from "../Articles/Articles";
import Podcasts from "../Podcasts/Podcasts";

function Highlights(lang) {
  const language = lang.lang;
  const [content, setContent] = useState("Articles");

  function handleOnClick(e) {
    console.log(e.target.value);
    setContent(e.target.value);
  }
  return (
    <div className=" sm:px-3  flex bg-[#ebebec]  flex-col   sm:pt-[3.5rem] md:pt-[5rem] 3xl:pt-[6rem]    ">
      <h2
        className={`text-center  py-8 font-${
          language === "en" ? "Amiri" : "Droid"
        }-Bold  text-[#1e1e1f] sm:text-4xl  xl:pt-14 3xl:text-[44px]`}
      >
        {language === "en" ? "Highlights" : "أهم الأعمال"}
      </h2>

      <div
        className={`flex justify-center items-center gap-x-16 ${
          language === "en" ? "sm:text-3xl" : "sm:text-2xl"
        } xl:pt-4 sm:pb-4 md:pb-6 z-0 ${
          language === "en" ? "" : "flex-row-reverse"
        }`}
      >
        <button
          className={`${
            content === "Articles"
              ? " bg-white border-[#1e1e1f] border-[1px] -translate-y-2 transation duration-150"
              : "border-[#1e1e1f] border-[1px]  "
          } p-2 rounded-lg   font-${
            language === "en" ? "Amiri" : "Droid"
          }-Bold`}
          value="Articles"
          onClick={handleOnClick}
        >
          {language === "en" ? "Articles" : "المقالات"}
        </button>
        <button
          className={`${
            content === "Podcasts"
              ? " bg-white border-[#1e1e1f] border-[1px] -translate-y-2 transation duration-150 "
              : "border-[#1e1e1f] border-[1px] "
          } p-2  rounded-lg  font-${
            language === "en" ? "Amiri" : "Droid"
          }-Bold`}
          value="Podcasts"
          onClick={handleOnClick}
        >
          {language === "en" ? "Podcasts" : "بودكاست"}
        </button>
      </div>
      {content === "Articles" ? (
        <Articles lang={language} />
      ) : (
        <Podcasts lang={language} />
      )}
    </div>
  );
}

export default Highlights;
