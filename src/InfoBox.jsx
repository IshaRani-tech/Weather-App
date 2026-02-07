import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  
  const INIT_URL = "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL = "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  
  return (
    <div className="InfoBox">
      <h3>WeatherInfo</h3>

      <div className="cardCon">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }} 
            image={info.humidity > 80 ? RAIN_URL : info.temp > 1 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temp - {info.temp}&deg;C</p>
              <p> Humidity - {info.humidity}</p>
              <p> Min Temp - {info.tempMin}&deg;C</p>
              <p> Max Temp - {info.tempMax}&deg;C</p>
              <p>
                {" "}
                The weather can be discribed as <b>{info.weather}</b> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
