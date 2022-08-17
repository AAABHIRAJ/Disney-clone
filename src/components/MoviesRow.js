import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "../axios";

function MoviesRow({title, fetchUrl}) {
    const base_Url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);
    console.log(movies);

  return (
    <Components>
        <h3>{title}</h3>  
          <Content>
              
              {movies?.map((movie) => {
                  return (
                    movie.poster_path && 
                    (<Wrap>
                        <img
                            src={base_Url + movie.poster_path}
                          />
                          <span>{ movie?.name || movie?.title || movie?.original_name}</span>
                      {/* {console.log(movie.backdrop_path)} */}
                        
                    </Wrap> )
                  )
              })}
              
              
        </Content>
          
    </Components>
  )
}

export default MoviesRow;

const Components = styled.div`


`

const Content = styled.div`
    margin:20px 0;
    display:flex;
    overflow:scroll;
    padding:20px 15px;

    
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    
    &::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }



`

const Wrap = styled.div`

    
    margin-right:10px;
    transition:all 200ms ease-in-out 0.3s;
    

    img{
        width:180px;
        height:230px;
        object-fit:cover;
        cursor:pointer;
        border-radius:4px;

       
    }
    &:hover{
            transform:scale(1.15);
            z-index:10;
        }

    span{
        font-size:14px;
    }

`

