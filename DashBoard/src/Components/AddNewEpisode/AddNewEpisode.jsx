import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AddNewEpisode = () => {
  const [name, setName] = useState("");
  const [cover, setCover] = useState("");
  const [description, setDescription] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [episodeName, setEpisodeName] = useState("");
  const [episodeLink, setEpisodeLink] = useState("");
  const [episodeDescription, setEpisodeDescription] = useState("");
  const [episodeCover, setEpisodeCover] = useState("");

  const handleEpisodeCoverChange = (e) => {
    setEpisodeCover(e.target.files[0]);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/podcasts/${id}`)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setCover(res.data.cover);
        setEpisodes(res.data.episodes);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);
  // console.log(episodes);
  console.log(name, description, cover, episodes);

  const handleSaveEpisode = () => {
    const newEpisode = {
      episodeName: episodeName,
      episodeDescription: episodeDescription,
      episodeLink: episodeLink,
      episodeCover: episodeCover.name,
    };
    const updateEpisodes = [...episodes, newEpisode];
    setEpisodes(updateEpisodes);
    console.log(updateEpisodes);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("cover", cover);
    formData.append("episodes", JSON.stringify(updateEpisodes));
    formData.append("episodeCover", episodeCover);

    axios
      .put(`http://localhost:5000/podcasts/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-8  px-10 font-semibold">
      <div className="flex flex-col border-2 p-4 mx-auto  border-black rounded-xl  w-[80%] justify-center items-center ">
        <h1 className="text-3xl my-2 text-center">Create New Podcast</h1>
        <form className="my-2 flex  space-x-5 ">
          <div className="w-[100%] flex flex-col">
            <label className="text-xl mt-2 text-black">
              Episode Title
              <input
                type="text"
                value={episodeName}
                onChange={(e) => setEpisodeName(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
              />
            </label>
            <label className="text-xl mt-4 text-black">
              Episode Description
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={episodeDescription}
                onChange={(e) => setEpisodeDescription(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
                required
              ></textarea>
            </label>
            <label className="text-xl mt-2 text-black">
              Episode Link
              <input
                type="text"
                value={episodeLink}
                onChange={(e) => setEpisodeLink(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
              />
            </label>
            <label
              htmlFor="image-upload-input"
              className="text-xl mt-4 text-black "
              dir="ltr"
            >
              Episode Cover
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleEpisodeCoverChange}
                className="border-2 border-black px-4 py-2  w-full rounded-md outline-none mt-2"
                id="image-upload-input"
              />
            </label>
          </div>
        </form>

        <button
          className="p-4 bg-black m-8 text-white text-xl w-1/2 rounded-2xl"
          onClick={handleSaveEpisode}
        >
          Save Episode
        </button>
      </div>
    </div>
  );
};

export default AddNewEpisode;
