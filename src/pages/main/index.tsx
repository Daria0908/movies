import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { ChangeEvent, useEffect } from "react";
import { fetchMovies } from "../../stores/movies/thunk";
import { setLimit, setPage } from "../../stores/movies";

const useAppDispatch = () => useDispatch<AppDispatch>();

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, limit, currentPage } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ limit: limit, page: currentPage }));
  }, [dispatch, limit, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    dispatch(setLimit(selectedValue));
    dispatch(fetchMovies({ limit: selectedValue, page: currentPage }));
  };

  const handlePrevPage = () => {
    dispatch(setPage(currentPage - 1));
    dispatch(fetchMovies({ limit: limit, page: currentPage }));
  };

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
    dispatch(fetchMovies({ limit: limit, page: currentPage }));
  };

  return (
    <div>
      <h1>Список фильмов</h1>
      <div>
        <select value={limit} onChange={handleLimit}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.name}</p>
              <p>{movie.shortDescription}</p>
              <p>{movie.year}</p>
            </li>
          ))}
      </ul>
      <div className="pages">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Предыдущая страница
        </button>
        <p>{currentPage}</p>
        <button onClick={handleNextPage}>Следующая страница</button>
      </div>
    </div>
  );
};

export default MainPage;
