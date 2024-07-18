import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditArticle() {
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
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setTitleTrans(res.data.titleTrans);
        setDate(res.data.date);
        setDescription(res.data.description);
        setDescriptionTrans(res.data.descriptionTrans);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert("An error happened. Please Check console");
        console.log(err);
      });
  }, [id]);

  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleTrans", titleTrans);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("descriptionTrans", descriptionTrans);
    formData.append("image", image);
    axios
      .put(`http://localhost:5000/articles/${id}`, formData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("An error happened. Please check your  console");
        console.log(formData);
        console.log(err);
      });
  };
  return (
    <div className="pt-4 pb-20 flex px-10 justify-center items-center flex-col ">
      <div className="flex flex-col border-2 p-4 mx-auto  border-black rounded-xl justify-center items-center w-[80%]">
        <h1 className="text-3xl mb-4 text-center font-semibold">
          Edit Article
        </h1>
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
}

export default EditArticle;
