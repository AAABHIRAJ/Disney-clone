import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
      <Carousel  {...settings}>
          <Wrap>
              <img 
                  src='images/slider-badag.jpg'
              />
          </Wrap>
          <Wrap>
              <img 
                  src='images/slider-badging.jpg'
              />
          </Wrap>
          <Wrap>
              <img 
                  src='images/slider-scale.jpg'
              />
          </Wrap>
          <Wrap>
              <img 
                  src='images/slider-scales.jpg'
              />
          </Wrap>
      </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider)`
        .slick-list{
            overflow: visible;
          }

          ul li button{
            
            &:before{
                font-size:10px;
                color: #fff;
                opacity:0.5;
            }
          }

          li.slick-active button::before{
            color:white;
            
          }

          button{
            z-index:1;
          }
          

`

const Wrap = styled.div`
    margin-top: 20px;
    overflow:hidden;
    img{
        cursor: pointer;
        border-radius:6px;
        width:100%;
        max-height:400px;
        object-fit: cover;
        border: 5px solid transparent;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover{
        border: 4px solid rgba(249,249,249,0.8);

        }
    }



`