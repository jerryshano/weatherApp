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

function Conditions({ data, mountProp, typedProp }) {
  return (
    <>
      <Style>
        <p>👁</p>
        <Flex>
          <div>Visibility</div>
          <div>
            {typedProp === 0
              ? `${mountProp?.visibility}ft`
              : ` ${data?.visibility}ft`}
          </div>
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
          <div>
            {typedProp === 0
              ? `${mountProp.windSpeed}k/mh`
              : `${data.windSpeed}k/mh`}
          </div>
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
          <div>
            {typedProp === 0 ? `${mountProp.clouds}%` : `${data.clouds}%`}
          </div>
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
          <div>
            {typedProp === 0 ? `${mountProp.humidity}%` : `${data.humidity}%`}
          </div>
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
