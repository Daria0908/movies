import React, { useState, useEffect } from 'react';

interface YearDropdownProps {
  selectedYear: number | null;
  onChange: (selectedYear: number | null) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({ selectedYear, onChange }) => {
  const [years, setYears] = useState<number[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 1934;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    setYears(years);
    setInitialized(true);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedYear = selectedValue === '' ? null : parseInt(selectedValue, 10);
    onChange(selectedYear);
  };

  return (
    <div className="year-dropdown">
      {initialized && (
        <select value={selectedYear !== null ? selectedYear.toString() : ''} onChange={handleChange}>
          <option value="">Выберите год</option>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default YearDropdown;
