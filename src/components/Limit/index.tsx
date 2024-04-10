import React, { useState } from 'react';

interface LimitDropdownProps {
  selectedCount: number;
  onChange: (selectedCount: number) => void;
}

const LimitDropdown: React.FC<LimitDropdownProps> = ({ selectedCount, onChange }) => {
  const [options] = useState([10, 20, 30, 50, 100]);


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedCount = parseInt(selectedValue, 10);
    onChange(selectedCount);
  };

  return (
    <div className="limit-dropdown">
      <select value={selectedCount.toString()} onChange={handleChange}>
        {options.map((count) => (
          <option key={count} value={count.toString()}>
            {count}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LimitDropdown;
