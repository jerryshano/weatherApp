import styled from "styled-components";

const Text = styled.div`
  font-size: 10px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Condition() {
  return (
    <>
      <p>🌧</p>
      <Flex>
        <div>Rain</div>
        <div>00mm</div>
      </Flex>
      <Text>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint officia
          excepturi quibusdam hic ab recusandae obcaecati, fuga ullam.
          Cupiditate voluptatem at quae pariatur nemo provident explicabo quas
          delectus eum incidunt?
        </p>
      </Text>
    </>
  );
}
export default Condition;
