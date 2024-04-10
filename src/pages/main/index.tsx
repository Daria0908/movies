import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { ChangeEvent, useEffect } from "react";
import { fetchMovies } from "../../stores/thunks";
import { Link } from "react-router-dom";
import { setLimit, setPage } from "../../stores/page";

const useAppDispatch = () => useDispatch<AppDispatch>();

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const {page, limit} = useSelector((state: RootState) => state.page)

  useEffect(() => {
    dispatch(fetchMovies({ limit: limit, page: page }));
  }, [dispatch, limit, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    dispatch(setLimit(selectedValue))
    dispatch(fetchMovies({ limit: selectedValue, page: page }));
  };

  const handlePrevPage = () => {
    dispatch(setPage(page - 1));
    dispatch(fetchMovies({ limit: limit, page: page }));
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchMovies({ limit: limit, page: page }));
  };

  return (
    <div>
      <h1>Список фильмов</h1>
      <div>
        <select
        value={limit} 
        onChange={handleLimit}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <ol>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/${movie.id}`}>
                <p>{movie.name}</p>
                <p>{movie.shortDescription}</p>
                <p>{movie.year}</p>
              </Link>
            </li>
          ))}
      </ol>
      <div className="pages">
        <button
        onClick={handlePrevPage}
        disabled={page === 1}
        >
          Предыдущая страница
        </button>
        <p>{page}</p>
        <button
        onClick={handleNextPage}
        >Следующая страница</button>
      </div>
    </div>
  );
};

export default MainPage;
