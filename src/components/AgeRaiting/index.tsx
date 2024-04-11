import React, { useState } from 'react';
import raitingList from './data';

interface AgeRaitingDropdownProps {
  selectedAgeRaiting: string | null;
  onChange: (selectedAgeRaiting: string | null) => void;
}

const AgeRaitingDropdown: React.FC<AgeRaitingDropdownProps> = ({ selectedAgeRaiting, onChange }) => {
  const raiting: {[key: string]: string} = raitingList;


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
        {Object.entries(raiting).map(([code, age]) => (
          <option key={code} value={code}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeRaitingDropdown;
