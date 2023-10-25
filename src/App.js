import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import CardHorizontal from "./components/cards/CardHorizontal";
import CardVertical from "./components/cards/CardVertical";
import CardPrincipal from "./components/cards/CardPrincipal";

function App() {
  const [periodo, setPeriodo] = useState("")
  const [towns, setTowns] = useState([]);
  const [verify, setVerify] = useState(false);

  const keyDamarys = "ea59e5899382c0a4febf547bf60d6a64";
  const keyEverton = "fd8d4357a0a5301755001ff2ca63b13c";
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Santos");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&appid=${keyDamarys}&units=metric`,
        { method: "GET" }
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.cod === "404") {
            setError(data.message);
            setForecast(null);
            return;
          }
          setError(null);
          setForecast(data);
          console.log(data);
          if (!verify) {
            fetchTowns();
          }
          let temp = parseInt(data.list[0].dt_txt.slice(11, 13));
          if (temp >= 12) {
            setPeriodo("PM")
          }else{
            setPeriodo("AM")
          }
        })
        .catch((err) => {
          setError(err);
          setForecast(null);
        });
    }, 1000);

    return () => {
      clearTimeout(fetchTimeout);
    };
  }, [city]);

  function fetchTowns() {
    setVerify(true);

    const cities = [
      "Aracaju",
      "Belém",
      "Belo Horizonte",
      "Boa Vista",
      "Brasília",
      "Campo Grande",
      "Cuiabá",
      "Curitiba",
      "Florianópolis",
      "Fortaleza",
      "Goiânia",
      "João Pessoa",
      "Macapá",
      "Maceió",
      "Manaus",
      "Natal",
      "Palmas",
      "Porto Alegre",
      "Porto Velho",
      "Recife",
      "Rio Branco",
      "Rio de Janeiro",
      "Salvador,BA,BR",
      "São Luís",
      "São Paulo",
      "Teresina",
      "Vitória",
    ];

    for (let i = 0; i < cities.length; i++) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cities[i]}&lang=pt_br&appid=${keyDamarys}&units=metric`,
        { method: "GET" }
      )
        .then((resp) => resp.json())
        .then((data) => {
          setTowns((arr) => [...arr, data]);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <main className="App">
      {!error && forecast && forecast.list && forecast.list.length > 0 ? (
        <CardPrincipal
          image={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}.png`}
          description={"Sol entre Nuvens"}
          temperatureMin={`${forecast.list[0].main.temp_min
            .toString()
            .slice(0, 2)}°`}
          temperatureMax={`${forecast.list[0].main.temp_max
            .toString()
            .slice(0, 2)}°`}
          city={city}
          date={`${forecast.list[0].dt_txt.slice(0, 10)}`}
          temperature={`${forecast.list[0].main.temp
            .toString()
            .slice(0, 2)}°`}
          hour={`${forecast.list[0].dt_txt.slice(11, 13)} ${periodo}`}
          hour1={`${forecast.list[1].dt_txt.slice(11, 13)} ${periodo}`}
          hour2={`${forecast.list[2].dt_txt.slice(11, 13)} ${periodo}`}
          hour3={`${forecast.list[3].dt_txt.slice(11, 13)} ${periodo}`}
          hour4={`${forecast.list[4].dt_txt.slice(11, 13)} ${periodo}`}
          hour5={`${forecast.list[5].dt_txt.slice(11, 13)} ${periodo}`}
          descriptionCardVertical={forecast.list[0].weather[0].description}
          descriptionCardVertical1={forecast.list[1].weather[0].description}
          descriptionCardVertical2={forecast.list[2].weather[0].description}
          descriptionCardVertical3={forecast.list[3].weather[0].description}
          descriptionCardVertical4={forecast.list[4].weather[0].description}
          descriptionCardVertical5={forecast.list[5].weather[0].description}
          imageCardVertical={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}.png`}
          imageCardVertical1={`http://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}.png`}
          imageCardVertical2={`http://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}.png`}
          imageCardVertical3={`http://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}.png`}
          imageCardVertical4={`http://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}.png`}
          imageCardVertical5={`http://openweathermap.org/img/wn/${forecast.list[5].weather[0].icon}.png`}
          temperatureCardVertical={`${forecast.list[0].main.temp
            .toString()
            .slice(0, 2)}°C`}
          temperatureCardVertical1={`${forecast.list[1].main.temp
            .toString()
            .slice(0, 2)}°C`}
          temperatureCardVertical2={`${forecast.list[2].main.temp
            .toString()
            .slice(0, 2)}°C`}
          temperatureCardVertical3={`${forecast.list[3].main.temp
            .toString()
            .slice(0, 2)}°C`}
          temperatureCardVertical4={`${forecast.list[4].main.temp
            .toString()
            .slice(0, 2)}°C`}
          temperatureCardVertical5={`${forecast.list[5].main.temp
            .toString()
            .slice(0, 2)}°C`}
        />
      ) : (
        <p>Buscando....</p>
      )}

      <Search
        cityValue={city}
        handleOnChange={(event) => setCity(event.target.value)}
      />

      {error ? <p>{error}</p> : null}

      {!error && forecast && forecast.list && forecast.list.length > 0 ? (
        <CardHorizontal
          image={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}.png`}
          altweather={forecast.list[0].weather[0].description}
          city={forecast.city.name}
          temperature={`${forecast.list[0].main.temp.toString().slice(0, 2)}°C`}
        />
      ) : (
        <p>Buscando....</p>
      )}

      {towns.map((town) => {
        return (
          <CardHorizontal
            image={`http://openweathermap.org/img/wn/${town.list[0].weather[0].icon}.png`}
            altweather={town.list[0].weather[0].description}
            city={town.city.name}
            temperature={`${town.list[0].main.temp.toString().slice(0, 2)}°C`}
          />
        );
      })}
    </main>
  );
}

export default App;
