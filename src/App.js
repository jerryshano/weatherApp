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

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");
  const [pictures, setPictures] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=76d0bcbd868226d9268c69f256948555`
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
        });
      return data;
    } catch (err) {
      console.log("oooooohh no!");
    }
  };

  const fetchPics = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/search/photos?page=1&query=office&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ"
      );
      const data = await response.json();
      if (data) setPictures(data);
      return pictures;
    } catch (err) {
      console.log("unsplash error jj");
    }
  };

  useEffect(() => {
    // fetchAPI();
    fetchPics();
  }, [location]);

  console.log(pictures, "pictures state jj", typeof pictures);
  console.log(weather, "weather state jj", typeof weather);

  // const searchLocation = (event) => {
  //   if (event.key === "Enter") {
  //     let kyiv = fetchAPI();
  //     console.log(kyiv, "kyiv");
  //   }
  // };

  return (
    <div className="">
      <Relative>
        <ParentFlex>
          <SideBar
            data={weather}
            // searchFunc={searchLocation}
            fetchWeather={fetchAPI}
            setLoc={setLocation}
            loc={location}
          />
          <Location />
        </ParentFlex>
        <Flex>
          <CenterMain />
          <Conditions data={weather} />
        </Flex>
      </Relative>
    </div>
  );
}

export default App;
