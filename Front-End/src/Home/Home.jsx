import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import Header from "./Header/Header";

function Home(lang) {
  return (
    <div className="flex flex-col justify-center items-center   sm:pt-[5.5rem]   lg:pt-[7rem]">
      <Header lang={lang} />
      <FeaturedArticles lang={lang} />
    </div>
  );
}

export default Home;
