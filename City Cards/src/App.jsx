import "./App.css";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import { useState } from "react";
import { citiesData } from "./config/CitySelector";


function App() {
  const [selectedCityCard, setSelectedCityCard] = useState(null);

  const onSelectCityCard = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCityCard(city);
  };

  return (
    <>
      <div>
        <CitySelector
          citiesData={citiesData}
          onSelectCityCard={onSelectCityCard}
        />
        <CityCard city={selectedCityCard} />
      </div>
          </>
  );
}

export default App;
