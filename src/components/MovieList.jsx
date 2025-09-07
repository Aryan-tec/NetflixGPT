import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-5">
      <h1 className="py-3 text-2xl text-slate-50">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
