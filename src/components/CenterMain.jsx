import styled from "styled-components";
import little from "../img/little.png";

const Style = styled.div`
  border: 2px solid darkgray;
  padding: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
function CenterMain({
  picturesProp,
  typedProp,
  mountWeatherProp,
  mountPicsProp,
}) {
  console.log(mountPicsProp?.results?.[2].small, typeof mountPicsProp);
  console.log(picturesProp.results, "picturesProp");
  return (
    <div>
      <Style>
        <div>
          <img
            src={
              typedProp === 0
                ? mountPicsProp?.results?.[2]?.urls?.small
                : picturesProp?.results?.[2]?.urls?.small
            }
            alt=""
            style={{ width: "450px", height: "120px" }}
          />
        </div>
      </Style>
      <Style>
        <Flex>
          <div>
            <img
              // src={
              //   typedProp === 0
              //     ? picturesProp?.results?.[2]?.urls?.small
              //     : mountPicsProp?.results?.[2]?.urls?.small
              // }
              src={
                typedProp === 0
                  ? mountPicsProp?.results?.[2]?.urls?.small
                  : picturesProp?.results?.[2]?.urls?.small
              }
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              // src={little}
              // src={
              //   picturesProp
              //     ? picturesProp?.results?.[2]?.urls?.small
              //     : mountPicsProp?.results?.[2]?.urls?.small
              // }
              src={
                typedProp === 0
                  ? mountPicsProp?.results?.[2]?.urls?.small
                  : picturesProp?.results?.[2]?.urls?.small
              }
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              // src={
              //   mountPicsProp
              //     ? mountPicsProp.results[2].urls.small
              //     : picturesProp.results[2].urls.small
              // }
              // src={
              //   picturesProp
              //     ? picturesProp?.results?.[2]?.urls?.small
              //     : mountPicsProp?.results?.[2]?.urls?.small
              // }
              src={
                typedProp === 0
                  ? mountPicsProp?.results?.[2]?.urls?.small
                  : picturesProp?.results?.[2]?.urls?.small
              }
              // src={little}
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={
                typedProp === 0
                  ? mountPicsProp?.results?.[2]?.urls?.small
                  : picturesProp?.results?.[2]?.urls?.small
              }
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
        </Flex>
      </Style>
    </div>
  );
}
export default CenterMain;
