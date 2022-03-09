import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Home = () => {
    const navigate = useNavigate()

    useEffect(function () {
        navigate("/pokemons")
    }, [navigate]);

    return (
        <Wrapper>
            <h1>home</h1>
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    
`
