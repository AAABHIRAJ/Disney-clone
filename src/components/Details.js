import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Component>
        <Background>
              <img
                  src='https://assets.thehansindia.com/h-upload/2022/03/26/1283681-rrr.webp'
              />
        </Background>
        
        <ImageTitle>
              <img 
                  src='https://i0.wp.com/pixarpost.com/wp-content/uploads/2020/10/6ceb9-pixar-bao-logo.jpg?resize=1200%2C675&ssl=1'
              />
        </ImageTitle>
        
        <Controls>
            <PlayButton>
                  <img 
                      src='images/play-icon-black.png'
                  />
                  <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                  <img 
                      src='images/play-icon-white.png'
                  />
                  <span>TRAILER</span>
            </TrailerButton>
            
            <AddButton>
                <span>+</span>
            </AddButton>
            
            <GroupWatchButton>
                 <img 
                      src='images/group-icon.png'
                  />
            </GroupWatchButton>
          </Controls>
          
          <SubTitle>
              <span>This is subtitle</span>
          </SubTitle>

          <Description>
              <span>This is description</span>
          </Description>
    </Component>
  )
}

export default Details


const Component = styled.div`
    position:relative;


`

const Background = styled.div`
    position:fixed;
    top:80px;
    bottom:0;
    right:0;
    left:0;
    z-index:-1;
    

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:0.8;
    }

`

const ImageTitle = styled.div`
    padding:50px 40px;

    img{
        width:200px;
        object-fit:cover;
    }

`

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-left:40px;

`
const PlayButton = styled.button`

    display:flex;
    align-items: center;
    height:37px;
    padding:0 15px ;
    background-color: rgb(249,249,249);
    cursor:pointer;
    margin-right:15px;

    img{
        height:20px;
    }

    span{
        letter-spacing: 1px;
    }

    &:hover{
        background-color: rgba(249,249,249, 0.7);

    }


`

const TrailerButton = styled(PlayButton)`

    background-color: rgba(0,0,0,0.5);
    border: 1px solid rgba(249,249,249, 0.7);
    span{
        color:white;
    }

`
const AddButton = styled.button`

    height:30px;
    width:30px;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0,0,0,0.4);
    color:white;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-right:15px;
    cursor:pointer;
    span{
        font-size:20px;
    }

`

const GroupWatchButton = styled(AddButton)`
    background-color:black;
    img{
        height:25px;
    }    

`

const SubTitle = styled.div`

    margin:20px 40px;
`
const Description = styled.div`
    margin:20px 40px;
    max-width:700px;
`