import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        Main Container
          -Video Background
          -Video Title
        Secondary COntainer
          -movie List * n
            - cards * n 
      */}
    </div>
  );
};

export default Browse;
