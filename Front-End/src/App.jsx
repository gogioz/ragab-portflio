import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Highlights from "./Highlights/Highlights";
import Home from "./Home/Home";
import logo from "../public/logo-dark.png";
import logoAr from "../public/logo-light.png";
import { NavLink } from "react-router-dom";

import "./nav.css";
import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Article from "./Article/Article";
import Podcast from "./Podcast/Podcast";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const ActiveLink = ({ isActive }) => {
    return { borderBottom: isActive ? "1px solid black" : "" };
  };

  const handleNavLinks = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLang(selectedLanguage);
  };

  return (
    <>
      <BrowserRouter>
        <div className="  flex flex-col justify-between ">
          <nav className="text-[#2f3232]  top-0 left-0  right-0 fixed sm:px-2  sm:py-3 lg:px-4 lg:py-5 bg-white opacity-100    2xl:px-8  z-10 ">
            <div
              className={`flex items-center justify-between  ${
                lang === "en" ? "" : "flex-row-reverse"
              }
        `}
            >
              <a
                href="/"
                className={`   lg:w-[25%]  xl:w-[20%] 2xl:w-[15%]  ${
                  lang === "en"
                    ? "sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]  md:p-2"
                    : "sm:max-w-[50%] md:w-[40%] flex justify-center"
                }`}
              >
                <img src={lang === "en" ? logo : logoAr} alt="" />
              </a>
              <div
                className={`hidden xl:flex   ${
                  lang === "en" ? "space-x-8" : "xl:flex-row-reverse space-x-2 "
                }`}
              >
                <ul
                  className={`flex space-x-5 xl:mt-2  font-${
                    lang === "en" ? "Amiri" : "Droid"
                  }-Regular  ${
                    lang === "en"
                      ? "xl:text-[36px] 2xl:text-[36px] 3xl:text-[38px] 5xl:text-[40px]"
                      : "xl:text-[28px] 2xl:text-[30px] 4xl:text-[32px] 5xl:text-[36px] flex-row-reverse"
                  } `}
                >
                  <li>
                    <NavLink
                      className={`nav-link-home nav-link  ${
                        lang === "en" ? "" : "ml-5 pb-2"
                      }`}
                      style={ActiveLink}
                      to="/"
                    >
                      {lang === "en" ? "Home" : "الرئيسية"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`nav-link nav-link-highlight  ${
                        lang === "en" ? "" : " pb-2"
                      } `}
                      style={ActiveLink}
                      to="/highlights"
                    >
                      {lang === "en" ? "Highlights" : "أهم الأعمال"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`nav-link nav-link-about  ${
                        lang === "en" ? "" : " pb-2"
                      } `}
                      style={ActiveLink}
                      to="/about"
                    >
                      {lang === "en" ? "About" : "عن رجب"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`nav-link nav-link-contact  ${
                        lang === "en" ? "" : " pb-2"
                      } `}
                      style={ActiveLink}
                      to="/contact"
                    >
                      {lang === "en" ? "Contact" : "تواصل"}
                    </NavLink>
                  </li>
                </ul>
                <select
                  onChange={changeLanguage}
                  className={`outline-none xl:text-[32px] 5xl:pt-1 font-${
                    lang === "en" ? "Amiri" : "Droid"
                  }-Regular `}
                >
                  <option value="en">En</option>
                  <option value="ar">Ar</option>
                </select>
              </div>

              <button
                id="menu-btn"
                className={` sm:mt-2 sm:mx-2 md:mx-4  lg:mx-0  hamburger focus:outline-none xl:hidden
             ${isMenuOpen ? "open" : ""}
            `}
                onClick={handleNavToggle}
                type="button"
              >
                <span className="hamburger-top "></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

            <div
              id="menu"
              className={`   rounded-lg    
             ${isMenuOpen ? "" : "hidden"}
          `}
            >
              <ul
                className={`flex flex-col items-center justify-center z-10 pt-5 w-full  space-y-5  shadow-md bg-white  font-${
                  lang === "en" ? "Amiri" : "Droid"
                }-Bold text-[#2f3232] rounded-md sm:overflow-scroll `}
              >
                <li className="pt-5">
                  <NavLink
                    onClick={handleNavLinks}
                    className="w-full text-center    text-2xl  "
                    to="/"
                  >
                    {lang === "en" ? "Home" : "الرئيسية"}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavLinks}
                    className="w-full text-center text-2xl"
                    to="highlights"
                  >
                    {lang === "en" ? "Highlights" : "أهم الأعمال"}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavLinks}
                    className="w-full text-center text-2xl"
                    to="about"
                  >
                    {lang === "en" ? "About" : "عن رجب"}
                  </NavLink>
                </li>
                <li className="w-full text-center text-2xl">
                  <NavLink
                    onClick={handleNavLinks}
                    className="w-full text-center text-2xl"
                    to="contact"
                  >
                    {lang === "en" ? "Contact" : "تواصل"}
                  </NavLink>
                </li>
                <li htmlFor="lang">
                  <select
                    onChange={changeLanguage}
                    className="outline-none text-centr text-2xl font-Amiri-Bold "
                    id="lang"
                  >
                    <option value="en">En</option>

                    <option value="ar">Ar</option>
                  </select>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route index element={<Home lang={lang} />} />
            <Route path="about" element={<About lang={lang} />} />
            <Route path="contact" element={<Contact lang={lang} />} />
            <Route path="highlights" element={<Highlights lang={lang} />} />
            <Route path="highlights/:id" element={<Article lang={lang} />} />
            <Route path="articles/:id" element={<Article lang={lang} />} />
            <Route path="podcasts/:id" element={<Podcast lang={lang} />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
