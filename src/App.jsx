import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './containers/home';
import PokemonDetail from './containers/PokemonDetail';
import Pokemons from './containers/Pokemons';


const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/pokemons/:id' element={<PokemonDetail />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: yellow;
  min-height: 100vh;  
  user-select: none;
`
