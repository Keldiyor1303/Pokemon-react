import React from 'react'
import styled from "styled-components"

const Loader = () => {
    return (
        <Wrapper>
            <img src="https://icon-library.com/images/pokeball-icon-png/pokeball-icon-png-5.jpg" alt="" />
        </Wrapper>
    )
}

export default Loader;

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 140px;
        display: block;
        margin: auto;
        animation-name: img__animated;
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes img__animated {
      0% {
        transform: rotate(0deg) ;
      }
      100% {
        transform: rotate(360deg) ;
      }
    }
`
