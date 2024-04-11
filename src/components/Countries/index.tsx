import countriesList from './data';

interface CountryDropdownProps {
    selecterCountry: string | null;
    onChange: (selectedCountry: string | null) => void;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({ onChange, selecterCountry }) => {
    const countries: { [key: string]: string } = countriesList;


 

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedCountry = selectedValue === '' ? null : selectedValue;
        onChange(selectedCountry);
    };

    return (
        <div className="country-dropdown">
            
                <select
                    value={selecterCountry !== null ? selecterCountry : ''}
                    onChange={handleChange}>
                    <option value="">Выберите страну</option>
                    {Object.entries(countries).map(([code, name]) => (
                        <option key={code} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            
        

        </div>
    );
};

export default CountryDropdown;
