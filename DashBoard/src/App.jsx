import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import AllArticles from "./Components/AllArticles/AllArticles";
import AddNewArticle from "./Components/AddNewAricle/AddNewArticle";
import EditArticle from "./Components/EditArticle/EditArticle";
import DeleteArticle from "./Components/DeleteArticle/DeleteArticle";
import Nav from "./Components/Nav/Nav";
import AllPodcasts from "./Components/AllPodcasts/AllPodcasts";
import AddNewPodcast from "./Components/AddNewPodcast/AddNewPodcast";
import AddNewEpisode from "./Components/AddNewEpisode/AddNewEpisode";
export default function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  const form = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admins`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const loginSubmit = function (e) {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };

    let isUserFound = false; // Add a flag to track if the user is found

    for (const user of users) {
      if (
        user.username === loginData.username &&
        user.password === loginData.password
      ) {
        isUserFound = true;
        break; // Exit the loop if a match is found
      }
    }

    if (isUserFound) {
      setCheckUser(true);
    } else {
      setCheckUser(false);
      alert("Wrong username or password. Try again!");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <>
      {checkUser ? (
        <BrowserRouter>
          <Nav checkUser={setCheckUser} />
          <Routes>
            <Route path="/" element={<AllArticles />} index />
            <Route path="/podcasts" element={<AllPodcasts />} index />
            <Route path="/addnewarticle" element={<AddNewArticle />} />
            <Route path="/addnewpodcast" element={<AddNewPodcast />} />
            <Route path="/articles/:id" element={<EditArticle />} />
            {/* <Route path="/podcasts/:id" element={<EditPodcast />} /> */}
            <Route path="/addnewepisode/:id" element={<AddNewEpisode />} />
            <Route path="/deletearticle/:id" element={<DeleteArticle />} />
            {/* <Route path="/deletepodcast/:id" element={<DeletePodcast />} /> */}
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="flex  justify-center h-[100vh] ">
          <div className="flex flex-col justify-center my-2 mx-4 md:mx-0 space-y-8">
            <h2 className="text-4xl  text-center font-bold">
              Login to your Dashboard
            </h2>
            <form
              ref={form}
              className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
              onSubmit={loginSubmit}
            >
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block  tracking-wide text-2xl font-semibold mb-2">
                    UserName
                    <input
                      className=" block mt-2 w-full bg-white focus:bg-white font-normal border border-gray-400 rounded-lg py-2 px-2  focus:outline-none active:bg-white"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block  tracking-wide text-2xl font-semibold mb-2">
                    Password
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <button
                    type="submit"
                    className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 "
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
