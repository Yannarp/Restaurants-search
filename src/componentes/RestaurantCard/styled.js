import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: #6200ee;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
font-family: Roboto, sans-serif;
color: #000000B3;
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin-botton: 10px;
`;

export const Address = styled.span`
  font-family: Roboto, sans-serif;
  color: #000000B3;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`;

export const RestaurantPhoto = styled.img`
display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
width: 100px;
height: 100px;
object-fit: cover;
border-radius: 6px;
`;
