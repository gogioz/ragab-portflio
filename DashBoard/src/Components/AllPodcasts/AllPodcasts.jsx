import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPodcasts() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/podcasts")
      .then((res) => {
        setPodcasts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-2 ">
      <div className=" text-center my-6"></div>
      <div className="mx-10 my-10" id="articles">
        <div className="grid  grid-cols-4 gap-x-10 gap-y-10">
          {podcasts.length > 0 ? (
            podcasts.map((article) => (
              <div
                className="shadow-[0_2px_15px_rgba(0,0,0,0.1)] bg-white  rounded-[6px] duration-[.3s] hover:shadow-[0_2px_15px_rgba(0,0,0,0.2)] -translate-y-10 text-black"
                key={article._id}
              >
                <div className="p-[10px] flex flex-col justify-between  space-y-1">
                  <h3
                    className="m-0  text-3xl font-semibold line-clamp-1"
                    dir={`${article.title === "" ? "rtl" : "ltr"}`}
                  >
                    {article.title === "" ? article.titleTrans : article.title}
                  </h3>
                  <p
                    className="leading-[1.5]  line-clamp-5 font-medium text-xl text-black "
                    dir={`${article.description === "" ? "rtl" : "ltr"}`}
                  >
                    {article.description === ""
                      ? article.descriptionTrans
                      : article.description}
                  </p>
                  <span
                    className={`font-light ${
                      article.title === "" ? "self-start" : "self-end"
                    }`}
                  >
                    {article.date}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 px-8 gap-x-4 ">
                  <Link to={`/articles/${article._id}`}>
                    <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded font-Camel-Medium">
                      Eidt
                    </button>
                  </Link>
                  <Link to={`/addnewepisode/${article._id}`}>
                    <button className="hover:bg-transparent bg-green-600 hover:text-green-600 font-semibold text-white py-2 px-4 border border-green-600 hover:border-transparent rounded font-Camel-Medium">
                      Add New Episode
                    </button>
                  </Link>
                  <Link to={`/delete/${article._id}`}>
                    <button className="hover:bg-transparent bg-red-600 hover:text-red-600 font-semibold text-white py-2 px-4 border border-red-600 hover:border-transparent rounded font-Camel-Medium">
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="font-semibold text-5xl flex justify-center items-center col-span-4  ">
              GO ADD SOME PODCASTS
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPodcasts;
