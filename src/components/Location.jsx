import styled from "styled-components";

const Flex = styled.div`
  flex-basis: 100%;
  padding: 45px;
  align-self: start;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: darkmagenta solid 4px;
`;
const Large = styled.div`
  font-size: 20px;
  width: 250px;
`;
const Small = styled.div`
  font-size: 10px;
  width: 250px;
`;
function Location() {
  return (
    <Flex>
      <Large>
        <div>Here you will find a world wide weather forecast</div>
      </Large>
      <Small>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          veniam temporibus, placeat ab ullam eum delectus deserunt voluptatibus
          excepturi at dolores a quisquam fugit nostrum tenetur alias culpa unde
          itaque!
        </div>
      </Small>
    </Flex>
  );
}
export default Location;
