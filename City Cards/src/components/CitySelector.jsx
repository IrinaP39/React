import { useState } from "react";

function CitySelector({ citiesData, onSelectCityCard }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
    onSelectCityCard(cityName);
  };

  return (
    <div>
      <h3>Выберите город:</h3>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">--Выбрать город--</option>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
