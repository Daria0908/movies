import React, { useState } from 'react';

interface AgeRaitingDropdownProps {
  selectedAgeRaiting: string | null;
  onChange: (selectedAgeRaiting: string | null) => void;
}

const AgeRaitingDropdown: React.FC<AgeRaitingDropdownProps> = ({ selectedAgeRaiting, onChange }) => {
  const [options] = useState(['g', 'nc17', 'pg', 'pg13', 'r!']);


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedAgeRaiting = selectedValue === '' ? null : selectedValue;
    onChange(selectedAgeRaiting);
  };

  return (
    <div className="age-raiting-dropdown">
      <select
      value={selectedAgeRaiting !== null ? selectedAgeRaiting : ''}
      onChange={handleChange}>
        <option value="">Выберите взрастное ограничение</option>
        {options.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeRaitingDropdown;
