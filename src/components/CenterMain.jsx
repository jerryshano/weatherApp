import styled from "styled-components";
import bigPng from "../img/big.png";
import little from "../img/little.png";

const Style = styled.div`
  border: 2px solid darkgray;
  padding: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
function CenterMain() {
  return (
    <div>
      <Style>
        <h3>Recent Place</h3>
        <div>
          <img
            src={bigPng}
            alt=""
            style={{ width: "450px", height: "120px" }}
          />
        </div>
      </Style>
      <Style>
        <h3>Recent Place</h3>
        <Flex>
          <div>
            <img src={little} style={{ width: "100px" }} alt="" />
          </div>
          <div>
            <img src={little} style={{ width: "100px" }} alt="" />
          </div>
          <div>
            <img src={little} style={{ width: "100px" }} alt="" />
          </div>
          <div>
            <img src={little} style={{ width: "100px" }} alt="" />
          </div>
        </Flex>
      </Style>
    </div>
  );
}
export default CenterMain;
