import React from 'react';
import { Row } from '../src/components/Row';
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { requests } from './request'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
       <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
