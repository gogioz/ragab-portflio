import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import Header from "./Header/Header";

function Home(lang) {
  return (
    <div className="flex flex-col justify-center items-center   sm:pt-[5rem] md:pt-[6.5rem]  xl:pt-[8rem]">
      <Header lang={lang} />
      <FeaturedArticles lang={lang} />
    </div>
  );
}

export default Home;
