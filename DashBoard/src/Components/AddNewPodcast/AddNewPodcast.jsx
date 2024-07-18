import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNewPodcast = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [episodeLink, setEpisodeLink] = useState("");
  const [episodeDescription, setEpisodeDescription] = useState("");
  const [episodeCover, setEpisodeCover] = useState("");

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };
  const handleEpisodeCoverChange = (e) => {
    setEpisodeCover(e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSavePodcast = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("episodeName", episodeTitle);
    formData.append("episodeDescription", episodeDescription);
    formData.append("episodeLink", episodeLink);
    formData.append("cover", cover);
    formData.append("episodeCover", episodeCover);

    axios
      .post("http://localhost:5000/podcasts", formData, {
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
              Podcast Title
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
              />
            </label>

            <label className="text-xl mt-4 text-black">
              Description
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
                required
              ></textarea>
            </label>

            <label
              htmlFor="image-upload-input"
              className="text-xl mt-4 text-black "
              dir="ltr"
            >
              Podcast Cover
              <input
                type="file"
                multiple
                accept="image/*"
                name="cover"
                onChange={handleCoverChange}
                className="border-2 border-black px-4 py-2  w-full rounded-md outline-none mt-2"
                id="image-upload-input"
              />
            </label>
            <label className="text-xl mt-2 text-black">
              Episode Title
              <input
                type="text"
                value={episodeTitle}
                onChange={(e) => setEpisodeTitle(e.target.value)}
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
          onClick={handleSavePodcast}
        >
          Save Podcast
        </button>
      </div>
    </div>
  );
};

export default AddNewPodcast;
