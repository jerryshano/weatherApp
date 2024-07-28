import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import CenterMain from "./components/CenterMain";
import Conditions from "./components/Conditions";
import Location from "./components/Location";
import SideBar from "./components/SideBar";

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

function App() {
  const [weather, setWeather] = useState({});
  const [pictures, setPictures] = useState({});
  const [typed, setTyped] = useState(0);
  const [mountWeather, setMountWeather] = useState({});
  const [mountPics, setMountPics] = useState({});

  const fetchPics = async (weather) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?query=${weather}&page=1&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
      );
      const data = await response.json();
      if (data) setPictures(data);
    } catch (err) {
      console.log("unsplash error jj");
    }
  };

  let fetchAPI = async (locParam) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locParam}&APPID=76d0bcbd868226d9268c69f256948555`
      );
      const data = await response.json();
      if (data)
        setWeather({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          country: data.sys.country,
          visibility: data.visibility,
          clouds: data.clouds.all,
          weather: data.weather[0].main,
        });
      console.log(data);
      fetchPics(data.weather[0].main);
    } catch (err) {
      console.log("oooooohh no!");
    }
  };
  console.log(weather.weather);
  console.log(pictures);

  let onMountPics = async (weatherParam) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?page=1&query=${weatherParam}&per_page=10&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
      );
      const data = await response.json();
      if (data) setMountPics(data);
    } catch (err) {
      console.log("unsplash error jj");
    }
  };

  useEffect(() => {
    async function weatherInitial() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=76d0bcbd868226d9268c69f256948555`
        );
        const data = await response.json();
        if (data) {
          setMountWeather({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            country: data.sys.country,
            visibility: data.visibility,
            clouds: data.clouds.all,
            weather: data.weather[0].main,
          });
          onMountPics(data.weather[0].main);
        }
      } catch (err) {
        console.log("oooooohh no!");
      }
    }
    weatherInitial();
  }, []);

  console.log(mountPics);
  console.log(mountWeather);

  return (
    <div className="">
      <Relative>
        <ParentFlex>
          <SideBar
            mountProp={mountWeather}
            setWeatherProp={setWeather}
            weatherStateProp={weather}
            fetchWeather={fetchAPI}
            setterTyped={setTyped}
            typedProp={typed}
          />
          <Location />
        </ParentFlex>
        <Flex>
          <CenterMain
            mountPicsProp={mountPics}
            mountWeatherProp={mountWeather}
            picturesProp={pictures}
            typedProp={typed}
          />
          <Conditions
            data={weather}
            mountProp={mountWeather}
            typedProp={typed}
          />
        </Flex>
      </Relative>
    </div>
  );
}

export default App;
