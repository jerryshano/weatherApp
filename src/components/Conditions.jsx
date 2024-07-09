import styled from "styled-components";

const Style = styled.div`
  border: 2px solid darkgoldenrod;
  padding: 20px;
`;

const Text = styled.div`
  font-size: 10px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Conditions({ data }) {
  // console.log(data.weather[0].main, "mainiii");

  return (
    <>
      <Style>
        <p>👁</p>
        <Flex>
          <div>Visibility</div>
          <div>{`${data.visibility}ft`}</div>
        </Flex>
        <Text>
          <p>
            Lorem ipsum doftlor, sit amet consectetur adipisicing elit. Sint
            officia excepturi quibusdam hic ab recusandae obcaecati.
          </p>
        </Text>
        <p>🌬</p>
        <Flex>
          <div>wind</div>
          <div>{`${data.windSpeed}k/mh`}</div>
        </Flex>
        <Text>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            officia excepturi quibusdam hic ab recusandae obcaecati.
          </p>
        </Text>
        <p>🌥</p>
        <Flex>
          <div>clouds</div>
          <div>{`${data.clouds}%`}</div>
        </Flex>
        <Text>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            officia excepturi quibusdam hic ab recusandae obcaecati.
          </p>
        </Text>
        <p>💦</p>
        <Flex>
          <div>humidity</div>
          <div>{`${data.humidity}%`}</div>
        </Flex>
        <Text>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            officia excepturi quibusdam hic ab recusandae obcaecati.
          </p>
        </Text>
      </Style>
    </>
  );
}
export default Conditions;
