import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchMovies } from "../../stores/thunks";
import { Link } from "react-router-dom";
import { setAgeRating, setCountry, setLimit, setPage, setYear } from "../../stores/page";
import YearDropdown from "../../components/Years";
import CountryDropdown from "../../components/Countries";
import LimitDropdown from "../../components/Limit";
import AgeRaitingDropdown from "../../components/AgeRaiting";

const useAppDispatch = () => useDispatch<AppDispatch>();

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const { page, limit, year, countries, ageRating } = useSelector((state: RootState) => state.page);
  const [selectedLimit, setSelectedLimit] = useState<number>(limit);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedAgeRaiting, setSelectedAgeRaiting] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchMovies({ limit: limit, page: page }));

  }, [dispatch, limit, page]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLimit = (selectedLimit: number) => {
    setSelectedLimit(selectedLimit);
    dispatch(setLimit(selectedLimit))
    dispatch(fetchMovies({ limit: selectedLimit, page: page, year: year, countries: countries, ageRating: ageRating }));
  };

  const handlePrevPage = () => {
    dispatch(setPage(page - 1));
    dispatch(fetchMovies({ limit: limit, page: page, year: year, countries: countries, ageRating: ageRating }));
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchMovies({ limit: limit, page: page, year: year, countries: countries, ageRating: ageRating }));
  };

  const handleYear = (selectedYear: number | null) => {
      setSelectedYear(selectedYear);
      dispatch(setYear(selectedYear));
      dispatch(fetchMovies({ limit: limit, page: page, year: selectedYear, countries: countries, ageRating: ageRating }));
  };

  const handleCountry = (selectedCountry: string | null) => {
      setSelectedCountry(selectedCountry);
      dispatch(setCountry(selectedCountry));
      dispatch(fetchMovies({ limit: limit, page: page, year: year, countries: selectedCountry, ageRating: ageRating }));
  };
  const handleAgeRaiting = (selectedAgeRaiting: string | null) => {
    setSelectedAgeRaiting(selectedAgeRaiting);
    dispatch(setAgeRating(selectedAgeRaiting))
    dispatch(fetchMovies({ limit: limit, page: page, year: selectedYear, countries: countries, ageRating: selectedAgeRaiting }));
};

  return (
    <div>
      <h1>Список фильмов</h1>
      <LimitDropdown
        onChange={handleLimit}
        selectedCount={limit}
      />

      <YearDropdown onChange={handleYear} selectedYear={selectedYear} />
      <CountryDropdown
        onChange={handleCountry}
        selecterCountry={selectedCountry}
      />
      <AgeRaitingDropdown
      onChange={handleAgeRaiting}
      selectedAgeRaiting={selectedAgeRaiting}
      />
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
