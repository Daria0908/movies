import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { useEffect, useState, useCallback } from "react";
import { fetchRandomMovie } from "../../stores/thunks";
import { setAgeRating, setCountry, setYear } from "../../stores/page";
import YearDropdown from "../../components/Years";
import CountryDropdown from "../../components/Countries";
import AgeRaitingDropdown from "../../components/AgeRaiting";

const useAppDispatch = () => useDispatch<AppDispatch>();

const RandomPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { randomMovie, loading, error } = useSelector((state: RootState) => state.random);
  const { page, limit, year, countries, ageRating } = useSelector((state: RootState) => state.page);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedAgeRaiting, setSelectedAgeRaiting] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchRandomMovie({ limit, page, year, countries, ageRating }))
  }, [])

  const handleMovie = () => {
    dispatch(fetchRandomMovie({ limit, page, year, countries, ageRating }));
  };

  const handleYear = (selectedYear: number | null) => {
    setSelectedYear(selectedYear);
    dispatch(setYear(selectedYear));
    dispatch(fetchRandomMovie({ limit, page, year: selectedYear, countries, ageRating }));
  };

  const handleCountry = (selectedCountry: string | null) => {
    setSelectedCountry(selectedCountry);
    dispatch(setCountry(selectedCountry));
    dispatch(fetchRandomMovie({ limit, page, year, countries: selectedCountry, ageRating }));
  };

  const handleAgeRaiting = (selectedAgeRaiting: string | null) => {
    setSelectedAgeRaiting(selectedAgeRaiting);
    dispatch(setAgeRating(selectedAgeRaiting))
    dispatch(fetchRandomMovie({ limit, page, year, countries, ageRating: selectedAgeRaiting }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={handleMovie}>
        Случайный
      </button> 
       <YearDropdown onChange={handleYear} selectedYear={selectedYear} />
      <CountryDropdown
        onChange={handleCountry}
        selecterCountry={selectedCountry}
      />
      <AgeRaitingDropdown
        onChange={handleAgeRaiting}
        selectedAgeRaiting={selectedAgeRaiting}
      />
      <p>{randomMovie?.name}</p>
      <p>{randomMovie?.id}</p>
    </div>
  );
};

export default RandomPage;
