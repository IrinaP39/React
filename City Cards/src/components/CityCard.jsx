function CityCard({ city }) {
  if (!city) return <p>Выберите город, чтобы увидеть информацию</p>;

  return (
    <div className="city_card">
      <h3>{city.name}</h3>
      <img src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <p>{city.facts}</p>
    </div>
  );
}

export default CityCard;
