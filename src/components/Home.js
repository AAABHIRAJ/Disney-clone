import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import MoviesRow from './MoviesRow';
import Viewers from './Viewers';
import requests from "../Requests";

function Home() {
  return (
      <Container>
          <ImgSlider />
          <Viewers />
          <MoviesRow title="Latest & Trending" fetchUrl={requests.fetchTrending}  />
          <MoviesRow title="Popular Movies"    fetchUrl={requests.fetchTopRated}  />
          <MoviesRow title="Popular in Action" fetchUrl={requests.fetchActionMovies}  />
          <MoviesRow title="Popular in Comedy" fetchUrl={requests.fetchComedyMovies}  />
          <MoviesRow title="Popular in Horror" fetchUrl={requests.fetchHorrorMovies}  />
          <MoviesRow title="Popular in Romance" fetchUrl={requests.fetchRomanceMovies}  />
          <MoviesRow title="Popular in Documentary" fetchUrl={requests.fetchDocumentaries} />
      </Container>
  )
}

export default Home;


const Container = styled.main`
    min-height: calc(100vh - 100px);
    padding: 0 calc(3.5vw + 5px);
    background-color: #0C111B;
    overflow-X: hidden;
    
`
