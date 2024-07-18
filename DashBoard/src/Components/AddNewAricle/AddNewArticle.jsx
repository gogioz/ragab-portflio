import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNewArticle = () => {
  const [title, setTitle] = useState("");
  const [titleTrans, setTitleTrans] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionTrans, setDescriptionTrans] = useState("");
  const [image, setImage] = useState([]);

  const handleImageChange = (e) => {
    setImage([...image, e.target.files[0]]);
  };

  const navigate = useNavigate();
  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleTrans", titleTrans);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("descriptionTrans", descriptionTrans);
    image.map((img) => formData.append("image", img));
    axios
      .post("http://localhost:5000/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
        console.log(formData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-8  px-10 font-semibold">
      <div className="flex flex-col border-2 p-4 mx-auto  border-black rounded-xl  w-[80%] justify-center items-center ">
        <h1 className="text-3xl my-2 text-center">Create New Article</h1>
        <form className="my-2 flex  space-x-5 ">
          <div className="w-[100%] flex flex-col">
            <label className="text-xl mt-2 text-black">
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            <label className="text-xl mt-4 text-black">
              Date
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
              />
            </label>
          </div>
          <div className="w-[100%] flex flex-col" dir="rtl">
            <label className="text-xl mt-2 text-black">
              العنوان
              <input
                type="text"
                value={titleTrans}
                onChange={(e) => setTitleTrans(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
              />
            </label>
            <label className="text-xl mt-4 text-black">
              النص
              <textarea
                rows={3}
                cols={40}
                type="text"
                value={descriptionTrans}
                onChange={(e) => setDescriptionTrans(e.target.value)}
                className="border-2 border-black px-4 py-2 w-full rounded-md outline-none mt-2"
                required
              ></textarea>
            </label>
            <label
              htmlFor="image-upload-input"
              className="text-xl mt-4 text-black "
              dir="ltr"
            >
              Select Images
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="border-2 border-black px-4 py-2  w-full rounded-md outline-none mt-2"
                id="image-upload-input"
              />
            </label>
          </div>
        </form>

        <button
          className="p-4 bg-black m-8 text-white text-xl w-1/2 rounded-2xl"
          onClick={handleSaveBook}
        >
          Save Article
        </button>
      </div>
    </div>
  );
};

export default AddNewArticle;
