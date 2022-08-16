import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Navbar() {
  return (
      <Nav>
          <Link to="/">
            <Logo
                src="images/logo.svg"
                alt="Logo"
            />
          </Link>
          <NavMenu>
              
              <a href="/">
                  <img
                      src="images/home-icon.svg"
                      alt='home-icon'
                  />
                  <span>HOME</span>
              </a>
              
              <a>
                  <img
                      src="images/search-icon.svg"
                      alt='search-icon'
                  />
                  <span>SEARCH</span>
              </a>

              <a>
                  <img
                      src="images/watchlist-icon.svg"
                      alt='watchlist-icon'
                  />
                  <span>WATCHLIST</span>
              </a>

              <a>
                  <img
                      src="images/original-icon.svg"
                      alt='originals-icon'
                  />
                  <span>ORIGINALS</span>
              </a>
              <a>
                  <img
                      src="images/movie-icon.svg"
                      alt='movie-icon'
                  />
                  <span>MOVIES</span>
              </a>
              <a>
                  <img
                      src="images/series-icon.svg"
                      alt='series-icon'
                  />
                  <span>SERIES</span>
              </a>
              
          </NavMenu>

          <Profile
              src='https://scontent.fpat2-3.fna.fbcdn.net/v/t31.18172-1/12783616_1680818432196235_6994109411146630813_o.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=X4qTutIdLpEAX9mBuxP&_nc_ht=scontent.fpat2-3.fna&oh=00_AT_L4XAZV1BhOcm95CKaRSkvhXt46bHZ6c-LwLnNJTNgbQ&oe=6320398F'
              alt='Abhiraj'
          />
              
          
    </Nav>
  )
}

export default Navbar;

const Nav = styled.div`
    overflow-X: hidden;
    height:80px;
    background-color: #131A28;
    display:flex;
    align-items:center;
`

const Logo = styled.img`
    width:100px;
    display: flex;
    align-items: center;
    padding:10px;
    padding-top:0;
    padding-left: 30px;
    cursor:pointer;

`

const NavMenu = styled.div`
    color:white;
    padding-left:30px;
    display:flex;
    flex:1;

    a{
        display:flex;
        align-items: center;
        margin-right:20px;
        cursor:pointer;
        text-decoration:none;
        color:white;

        img{
            height:17px;
        }
        span{
            font-size:12px;
            margin-left:5px;
            position:relative;
            letter-spacing:1px;

            &:after{
            content:"";
            height:2px;
            background-color:white;
            right:0;
            left: 0;
            bottom:-6px;
            position:absolute;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
            
        }

        
    }

`

const Profile = styled.img`

    height:50px;
    border-radius:50%;
    cursor:pointer;
    border: 2px solid white;
    margin-right:20px;

`