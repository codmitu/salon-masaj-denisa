import React from 'react'
import styled from 'styled-components'
import {data} from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PriceCard} from './PriceCard'


export const Prices = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 10000,
        onEdge: false,
        arrows: false,
        fade: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: false,
            }
            }
          ]
    };

    return (
        <Container id="preturi">
            <Header>
                <Title>Prețuri și Servicii</Title>
                <Subtitle>Scapă de stresul zilei și pășește în lumea relaxării!</Subtitle>
            </Header>
            <Wrapper>
                <Slider {...settings}>
                    {data.map(item => (
                        <PriceCard key={item.id} item={item}/>
                    ))}
                </Slider>
            </Wrapper>
        </Container>
    )
}

const Container= styled.article`
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 5vw 0;
`
const Header = styled.header`
    align-self: flex-start;
`
const Title = styled.h2`
    font-size: var(--mf);
    text-align: left;
    font-weight: 400;
    margin-left: 10vw;
    margin-bottom: 20px;
    `
const Subtitle = styled.h3`
    margin-bottom: var(--sf);
    font-weight: 400;
    margin-bottom: var(--xsf);
    font-size: var(--xsf);
    color: gray;
    font-style: italic;
    align-self: flex-start;
    margin-left: 15vw;
`
const Wrapper = styled.div`
    width: 100%;
`