import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";

function Article(lang) {
  const language = lang.lang;
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionTrans, setDescriptionTrans] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState([]);
  const images = image ? image.slice(1) : "";
  const { id } = useParams();
  console.log(description);

  useEffect(() => {
    axios
      .get(`https://ragaboz.vercel.app/articles/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setTitleTrans(res.data.titleTrans);
        setDescription(res.data.description);
        setDescriptionTrans(res.data.descriptionTrans);
        setDate(res.data.date);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);

  return (
    <div className="flex  justify-center items-center   text-[#1e1e1f]  sm:pt-[4.3rem] md:pt-[4.7rem]    lg:pt-[6rem] ">
      <div
        className="sm:mt-4 flex flex-col justify-center items-center sm:gap-y-2 xl:gap-y-4"
        id="article"
      >
        <h1
          dir="rtl"
          className={`text-center    font-${
            (language === "en" && description) ||
            (language === "ar" && !descriptionTrans)
              ? "Amiri"
              : "Droid"
          }-Bold  sm:px-4  sm:text-2xl md:text-3xl   xl:text-4xl `}
        >
          {title ? title : titleTrans}
        </h1>
        <img src={`/${image[0]}`} alt="" className="sm:px-2 md:px-4 py-4" />

        <p className="font-Amiri-Regular self-end sm:pr-3 sm:text-lg xl:pr-16 xl:text-3xl">
          {date}
        </p>
        <div
          className={` sm:px-1 md:px-4 xl:px-4 pb-6  flex flex-col justify-center     text-white`}
        >
          <div
            className={`sm:text-xl sm:px-1.5 font-${
              (language === "en" && description) ||
              (language === "ar" && !descriptionTrans)
                ? "Amiri"
                : "Droid"
            }-Regular  sm:py-2  md:text-2xl
              ${
                (language === "en" && description) ||
                (language === "ar" && !descriptionTrans)
                  ? "lg:text-3xl"
                  : "lg:text-2xl"
              }   text-[#1e1e1f] bg-white  md:pt-4 flex flex-col
        xl:px-12  `}
          >
            {(language === "en" && description) ||
            (language === "ar" && !descriptionTrans)
              ? description
                ? description.split("&").map((text, index) => (
                    <div className=" flex flex-col img " key={index}>
                      {text.split("$").map((p, i) => (
                        <p key={i} className="pb-4 last:pb-0 ">
                          {p}
                        </p>
                      ))}
                      <div
                        className={`flex justify-center py-8 img  ${
                          index === description.split("&").length - 1
                            ? "hidden"
                            : ""
                        }`}
                      >
                        <img
                          src={`/${images[index]}`}
                          className="sm:w-[100%]  xl:w-[50%] sm:px-2 md:px-4 "
                        />
                      </div>
                    </div>
                  ))
                : ""
              : descriptionTrans
              ? descriptionTrans.split("&").map((text, index) => (
                  <div className=" flex flex-col img " key={index} dir="rtl">
                    {text.split("$").map((p, i) => (
                      <p key={i} className="pb-6 last:pb-0">
                        {p}
                      </p>
                    ))}
                    <div
                      className={`flex justify-center py-8 img  ${
                        index === descriptionTrans.split("&").length - 1
                          ? "hidden"
                          : ""
                      }`}
                    >
                      <img
                        src={`/${images[index]}`}
                        className="sm:w-[100%]  xl:w-[50%] sm:px-2 md:px-4 "
                      />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
