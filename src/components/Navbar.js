import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUserEmail, selectUserName, selectUserPhoto } from '../features/users/userSlice';
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(login({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                    
                }))
                navigate("/");
            }
        })
    }, [])
    

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout({
                    name : null,
                    email : null,
                    photo : null
            }))
        })
        
        navigate("/login");
    }

  return (
      <Nav>
          <Link to="/">
            <Logo
                src="images/logo.svg"
                alt="Logo"
            />
          </Link>

          {!userName ?
              (<LoginButton>
                  
                    <Login onClick={()=> navigate("/login")}>
                        <span>LOGIN</span>
                    </Login>
                 
                  
              </LoginButton>) :
              <>
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
            <Name>
                      <span>Hi, {userName}</span>
            </Name>
          <Profile
              onClick={signOut}
              src='https://scontent.fpat2-3.fna.fbcdn.net/v/t31.18172-1/12783616_1680818432196235_6994109411146630813_o.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=X4qTutIdLpEAX9mBuxP&_nc_ht=scontent.fpat2-3.fna&oh=00_AT_L4XAZV1BhOcm95CKaRSkvhXt46bHZ6c-LwLnNJTNgbQ&oe=6320398F'
              alt='Abhiraj'
          />
              </>
              }
          
              
          
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

const LoginButton = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    margin-right:30px;

`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 6px 16px;
    cursor:pointer;
    background-color:rgba(0,0,0,0.6);
    letter-spacing:1px;
    font-size:14px;
    font-weight:500;
    border-radius:4px;


    &:hover{
        background-color:#f9f9f9;
        color:black;
    }
`

const Name = styled.div`
    margin-right: 10px;
    font-size:14px;
    letter-spacing:1px;
`