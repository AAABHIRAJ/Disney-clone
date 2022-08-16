import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <Content>
              <LogoOne
                  src="images/cta-logo-one.svg"
              />
            
              <SigninButton>
                  <span>GET ALL THERE</span>
              </SigninButton>

              <Description>
                  <span>
                      This is description...This is description...This is description...This is description...This is description...This is description...This is description...
                  </span>
              </Description>
              <LogoTwo
                  src="images/cta-logo-two.png"
              />
        </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`

   

`

const Content = styled.div`

position:relative;
    height: calc(100vh - 80px);
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    ${'' /* justify-content:center; */}
    padding-top:110px;
        

    &:before{
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        content:"";
        background-image:url("images/login-background.jpg"); 
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
        z-index:-1;
        opacity:0.6;

    }

`

const LogoOne = styled.img`
    object-fit:contain;
    width:60%;
    display:flex;

`

const SigninButton = styled.div`

    background-color:#0063e5;
    width:60%;
    padding:10px 0;
    border-radius:4px;
    text-align:center;
    font-weight:600;
    letter-spacing:1px;
    margin-top:8px;
    margin-bottom:20px;
    cursor:pointer;
    transition: all 250ms;


    &:hover{
        background-color:#0483ee;

    }

`

const Description = styled.div`
    line-height:1.7;
    letter-spacing:1.3px;
    margin-bottom:20px;
    width:60%;
    text-align:center;
    font-size:12px;

`

const LogoTwo = styled.img`
    object-fit:contain;
    width:50%;
    display:flex;

`


