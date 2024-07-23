import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Location from "./components/Location";
import CenterMain from "./components/CenterMain";
import Conditions from "./components/Conditions";

const Relative = styled.div`
  background-color: #1a281f;
  color: #b8d3d1;
  position: relative;
`;
const ParentFlex = styled.div`
  display: flex;
`;
const Flex = styled.div`
  display: flex;
  position: absolute;
  top: 150px;
  left: 233.75px;
`;

let fetchAPI = async (locParam) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locParam}&APPID=76d0bcbd868226d9268c69f256948555`
    );
    const data = await response.json();
    if (data)
      return {
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        country: data.sys.country,
        visibility: data.visibility,
        clouds: data.clouds.all,
        weather: data.weather[0].main,
      };
  } catch (err) {
    console.log("oooooohh no!");
  }
};

function App() {
  const [weather, setWeather] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?query=${weather.weather}&page=1&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
        );
        const data = await response.json();
        if (data) {
          setPictures(data);
          // return data;
        }
      } catch (err) {
        console.log("unsplash error jj");
      }
    };
    fetchPics();
  }, [weather.weather]);

  return (
    <div className="">
      <Relative>
        <ParentFlex>
          <SideBar
            setWeatherProp={setWeather}
            weatherStateProp={weather}
            fetchWeather={fetchAPI}
            setterTyped={setTyped}
          />
          <Location />
        </ParentFlex>
        <Flex>
          <CenterMain picturesProp={pictures} typedProp={typed} />
          <Conditions data={weather} />
        </Flex>
      </Relative>
    </div>
  );
}

export default App;
