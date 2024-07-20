import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Podcast(lang) {
  const language = lang.lang;
  const [name, setName] = useState("");

  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ragaboz.vercel.app/podcasts/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEpisodes(res.data.episodes);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);
  console.log(episodes);

  return (
    <div className="flex  flex-col justify-center items-center   text-[#1e1e1f] pt-4 bg-[#ebebec] sm:pt-[3.5rem] md:pt-[6rem] 2xl:pt-[7rem]">
      <div
        className=" flex flex-col justify-center items-center sm:gap-y-2 xl:gap-y-0 "
        id="article"
      >
        <h1
          dir="rtl"
          className={`sm:text-4xl sm:py-6    text-center  text-[#1e1e1f] xl:py-6 font-Droid-Bold 5xl:text-5xl`}
        >
          {name}
        </h1>
      </div>
      <div className="w-[100%] flex justify-center sm:px-4 md:px-0 pb-4">
        <div className="flex flex-col pb-4  sm:px-1  md:px-3 sm:space-y-6 sm:w-[100%] md:w-[80%]  lg:w-[90%]  xl:w-[85%] xl:pb-12 xl:space-y-10 4xl:w-[60%] 5xl:py-10  ">
          {episodes.map((episode) => (
            <div
              target="_blanck"
              className={`sm:m-0   flex sm:flex-col ${
                language === "en" ? "sm:flex-row" : "sm:flex-row-reverse"
              } md:flex-row    5xl:gap-x-0  hover:-translate-y-1 transation  duration-150   hover:cursor-pointer`}
              key={episode._id}
            >
              <div className="sm:w-[0%] lg:w-[30%]  5xl:w-[30%] flex flex-none justify-end ">
                <img
                  src={`/${episode.episodeCover}`}
                  className=" sm:hidden lg:block"
                  alt=""
                />
              </div>
              <div className=" flex flex-col flex-1     sm:px-1 md:px-2 xl:px-4 sm:py-0 2xl:gap-y-0 justify-around bg-white ">
                <h2
                  className={`font-${
                    (language === "en" && episode.episodeName) ||
                    language === "ar"
                      ? "Droid"
                      : "Amiri"
                  }-Bold py-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl   `}
                  dir={`${episode.episodeName ? "rtl" : "ltr"}`}
                >
                  {episode.episodeName}
                </h2>

                <p
                  className={`sm:text-md sm:leading-tight font-${
                    (language === "en" && episode.episodeName) ||
                    language === "ar"
                      ? "Droid"
                      : "Amiri"
                  }-Regular  text-[#3b3b3d] sm:pb-4 lg:pb-0      lg:text-xl lg:leading-[1.4] 4xl:text-xl 4xl:leading-[1.2]"
                      
                   xl:tracking-tight  `}
                  dir={`${episode.episodeName ? "rtl" : "ltr"}`}
                >
                  {episode.episodeDescription}
                </p>
                <div className="flex sm:justify-between md:justify-around  flex-row-reverse sm:pb-2 md:pb-5 lg:pb-2 lg:block">
                  <img
                    src={`../../public/${episode.episodeCover}`}
                    alt=""
                    className="sm:w-[40%] md:w-[30%]  sm:rounded-full lg:hidden"
                  />
                  <button className="hover:cursor-pointer flex sm:self-center lg:self-end px-4 py-3  border-1 border-[#3b3b3d] bg-[#3b3b3d] text-white rounded-xl font-Droid-Regular m-2 ">
                    <a href={episode.episodeLink}>للاستماع</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcast;
