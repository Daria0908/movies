import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../stores";
import { useEffect } from "react";
import { fetchMovie } from "../../stores/movies/thunk";

const useAppDispatch = () => useDispatch<AppDispatch>();

const ElementPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id?: string}>();
  const movieId = id ? parseInt(id, 10) : undefined;
  const {currentMovie, loading, error} = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (typeof movieId === 'number' && !isNaN(movieId)) {
      dispatch(fetchMovie(movieId))
    }
  }, [dispatch, movieId])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentMovie) return <div>No movie found</div>;

  return (
    <div>
      <h1>{currentMovie.name}</h1>
      {/* Отобразите остальные детали фильма */}
    </div>
  );
};

export default ElementPage;
