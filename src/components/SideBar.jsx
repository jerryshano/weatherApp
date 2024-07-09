import styled from "styled-components";

const Bar = styled.div`
  width: 250px;
  border-right: solid black 4px;
  background-color: grey;
  height: 100vh;
  padding: 40px;
`;
const Company = styled.p`
  font-size: 12px;
  white-space: nowrap;
`;
const Txt = styled.p`
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;
const DiffTxt = styled.p`
  font-size: 10px;
`;
const Icon = styled.p`
  font-size: 70px;
  margin: 0;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Flag = styled.div`
  background-color: azure;
  padding: 10px;
  border-radius: 5px;
`;
const Spacer = styled.div`
  margin-top: 20px;
`;
const Input = styled.input`
  width: 150px;
`;

function SideBar({ fetchWeather, data, setLoc, loc }) {
  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      let kyiv = await fetchWeather();
      console.log(kyiv, "kyiv");
    }
  };

  return (
    <>
      <Bar>
        <Flex>
          <Icon>M</Icon>
          <div>
            <Company>BYEFORECAST</Company>
            <DiffTxt>find the perfect weather</DiffTxt>
          </div>
        </Flex>
        <Flex>
          <Flag>🇨🇦</Flag>
          <div>
            <Company>current location</Company>
            <Txt>
              {data.country}
              {data.location}
            </Txt>
          </div>
        </Flex>
        <Spacer>
          <Input
            value={loc}
            onKeyDown={searchLocation}
            onChange={(event) => setLoc(event.target.value)}
            placeholder="Current location"
            type="search"
          ></Input>
        </Spacer>
      </Bar>
    </>
  );
}
export default SideBar;