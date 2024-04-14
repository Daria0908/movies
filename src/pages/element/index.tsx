import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../stores";
import { useEffect } from "react";
import { fetchMovie } from "../../stores/thunks";
import BtnBack from "../../components/BtnBack";

const useAppDispatch = () => useDispatch<AppDispatch>();

const ElementPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const movieId = id ? parseInt(id, 10) : undefined;
  const { movie, loading, error } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    if (typeof movieId === "number" && !isNaN(movieId)) {
      dispatch(fetchMovie(movieId));
    }
  }, [dispatch, movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BtnBack />
      <p>{movie?.name}</p>
      <p>{movie?.shortDescription}</p>
    </div>
  );
};

export default ElementPage;
