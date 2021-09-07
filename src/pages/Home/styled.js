import styled from 'styled-components';
import Slider from 'react-slick';


export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;


export const Container = styled.aside`
background-color: #00000014;
width: 360px;
height: 100vh;
overflow-y: auto;
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 16px;
`;

export const Logo = styled.img`
margin-bottom: 15px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
font-family: Roboto, sans-serif;
color: #000000B3;
font-size: 24px;
font-weight: bold;
font-height: 29px;
margin: 16px 0;
`;

export const ModalTitle = styled.p`
margin-botton: 10px;
letter-spacing: 0.11px;
font-family: Roboto, sans-serife;
color: #000000B3;
text-transform: none;
line-height: 29px;
font-size: 24px;
font-weight: bold;
`;

export const ModalContent = styled.p`
${ModalTitle};
margin-botton: 10px;
line-height: 19px;
font-size: 16px;
font-weight: normal;
`;



