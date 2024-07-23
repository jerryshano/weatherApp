import styled from "styled-components";
import big from "../img/big.png";
import little from "../img/little.png";

const Style = styled.div`
  border: 2px solid darkgray;
  padding: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
function CenterMain({ picturesProp, typedProp }) {
  return (
    <div>
      <Style>
        <h3>Recent Place</h3>
        <div>
          <img
            src={typedProp ? picturesProp.results[2].urls.small : big}
            alt=""
            style={{ width: "450px", height: "120px" }}
          />
        </div>
      </Style>
      <Style>
        <h3>Recent Place</h3>
        <Flex>
          <div>
            <img
              src={typedProp ? picturesProp.results[9].urls.small : little}
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={typedProp ? picturesProp.results[9].urls.small : little}
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={typedProp ? picturesProp.results[9].urls.small : little}
              style={{ width: "100px", height: "130px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={typedProp ? picturesProp.results[9].urls.small : little}
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
