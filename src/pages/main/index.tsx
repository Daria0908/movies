import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../stores/thunks";
import { Link } from "react-router-dom";
import { setAgeRating, setCountry, setLimit, setPage, setSearch, setYear, toggleSerach } from "../../stores/page";
import YearDropdown from "../../components/Years";
import CountryDropdown from "../../components/Countries";
import LimitDropdown from "../../components/Limit";
import AgeRaitingDropdown from "../../components/AgeRaiting";
import AuthInput from "../../components/AuthInput";

const useAppDispatch = () => useDispatch<AppDispatch>();

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const { page, limit, year, countries, ageRating, search, isSearching } = useSelector((state: RootState) => state.page);
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const [selectedLimit, setSelectedLimit] = useState<number>(limit);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedAgeRaiting, setSelectedAgeRaiting] = useState<string | null>(null);
  const [searchInput, setSeacrhInput] = useState<string>("");

  useEffect(() => {
    dispatch(fetchMovies({ limit, page, year, countries, ageRating, search, isSearching }));
  }, [dispatch, limit, page, year, countries, ageRating, search, isSearching]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLimit = (selectedLimit: number) => {
    setSelectedLimit(selectedLimit);
    dispatch(setLimit(selectedLimit));
    dispatch(fetchMovies({ limit: selectedLimit, page, year, countries, ageRating, search, isSearching }));
  };

  const handlePrevPage = () => changePage(page - 1);

  const handleNextPage = () => changePage(page + 1);

  const changePage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(fetchMovies({ limit, page: newPage, year, countries, ageRating, search, isSearching }));
  };

  const handleYear = (selectedYear: number | null) => {
    setSelectedYear(selectedYear);
    dispatch(setYear(selectedYear));
    dispatch(fetchMovies({ limit, page, year: selectedYear, countries, ageRating, search, isSearching }));
  };

  const handleCountry = (selectedCountry: string | null) => {
    setSelectedCountry(selectedCountry);
    dispatch(setCountry(selectedCountry));
    dispatch(fetchMovies({ limit, page, year, countries: selectedCountry, ageRating, search, isSearching }));
  };

  const handleAgeRaiting = (selectedAgeRaiting: string | null) => {
    setSelectedAgeRaiting(selectedAgeRaiting);
    dispatch(setAgeRating(selectedAgeRaiting));
    dispatch(fetchMovies({ limit, page, year, countries, ageRating: selectedAgeRaiting, search, isSearching }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSerach());
    dispatch(setSearch(event.target.value));
    setSeacrhInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    dispatch(toggleSerach());
    dispatch(fetchMovies({ limit, page, search: searchInput, isSearching }));
  };

  return (
    <div>
      <h1>Список фильмов</h1>
      <AuthInput />

      {isLogged && (
        <button>
          <Link to={"/random"}>Случайный</Link>
        </button>
      )}
      <div>
        <input type="text" value={searchInput!} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <button onClick={handleSearch} disabled={searchInput === ""}>
          Search
        </button>
      </div>

      <LimitDropdown onChange={handleLimit} selectedCount={selectedLimit} />

      <YearDropdown onChange={handleYear} selectedYear={selectedYear} />
      <CountryDropdown onChange={handleCountry} selecterCountry={selectedCountry} />
      <AgeRaitingDropdown onChange={handleAgeRaiting} selectedAgeRaiting={selectedAgeRaiting} />

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
        <button onClick={handlePrevPage} disabled={page === 1}>
          Предыдущая страница
        </button>
        <p>{page}</p>
        <button onClick={handleNextPage}>Следующая страница</button>
      </div>
    </div>
  );
};

export default MainPage;
