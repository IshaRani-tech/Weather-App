import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "69f45fbdc5ab7749782556ba20c52784";

  let getWeatherInfo = async () => {
    try {
    let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await responce.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
    } catch(err) {
      throw err;
    }
  };
  

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
    e.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);

    } catch(err) {
      setError(true);
    }
    
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}} >No such place exists!</p>}
      </form>
    </div>
  );
}
