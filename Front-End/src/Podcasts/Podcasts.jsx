import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Podcasts(lang) {
  const language = lang.lang;
  const [renderedData, setRenderedData] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    axios
      .get("https://ragaboz.vercel.app/podcasts")
      .then((res) => {
        console.log(res.data.data);
        setPodcasts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const reversedData = podcasts ? [...podcasts].reverse() : "";
    if (reversedData.length > 0) {
      setRenderedData(reversedData.slice(0, 6));
    }
  }, [podcasts]);

  const handleLoadMore = () => {
    const reversedData = podcasts ? [...podcasts].reverse() : "";

    const nextData = reversedData.slice(
      renderedData.length,
      renderedData.length + 3
    );
    setRenderedData([...renderedData, ...nextData]);
  };

  return (
    <div className="sm:mx-2 sm:my-6 md:my-2 lg:mx-6  xl:mx-10 4xl:mx-20  flex flex-col justify-center items-center">
      <div
        className="sm:py-4 sm:pb-12 grid sm:grid-cols-1 lg:w-[60%] sm:gap-x-0 sm:gap-y-4 xl:w-[100%]   lg:gap-x-4 xl:grid-cols-[repeat(3,minmax(0,_1fr))]  2xl:grid-cols-3 xl:gap-x-4 5xl:gap-x-[60px] 5xl:gap-y-[60px]  xl:pb-4  "
        dir="rtl"
      >
        {renderedData.map((podcast) => (
          <Link
            className=" bg-white  text-[#1e1e1f] hover:cursor-pointer  transition-transform duration-200  hover:-translate-y-1 "
            key={podcast._id}
            to={`/podcasts/${podcast._id}`}
          >
            <img src={podcast.cover} className="w-[100%]" />
            <div className="sm:p-3 xl:p-0 5xl:p-[20px] flex flex-col justify-between  space-y-3">
              <h3
                className={`sm:text-2xl m-0  5xl:text-2xl font-${
                  (language === "en" && podcast.name) || language === "ar"
                    ? "Droid"
                    : "Amiri"
                }-Bold  5xl:leading-relaxed
                  ${
                    (language === "en" && podcast.name) || language === "ar"
                      ? "5xl:text-3xl"
                      : "5xl:text-2xl"
                  }
               
                `}
              >
                {podcast.name}
              </h3>

              <p
                className={`sm:text-lg 5xl:leading-relaxed overflow-hidden font-[400] 5xl:text-xl text-[#063242]   font-${
                  (language === "en" && podcast.name) || language === "ar"
                    ? "Droid"
                    : "Amiri"
                }-Regular`}
              >
                {podcast.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {podcasts
        ? podcasts.length > renderedData.length && (
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

export default Podcasts;
