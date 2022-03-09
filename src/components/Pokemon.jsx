import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pokemon = (props) => {
    const [data, setData] = useState([])
    const [types, setTypes] = useState([])
    function getData() {
        axios.get(props.url)
            .then(response => {
                setData(response.data.sprites.front_default)
                setTypes(response.data.types)
            })
    }
    useEffect(getData, [props])
    console.log(types);

    return (
        <Wrapper to={`/pokemons/${props.id + 1}`} types={props.types}>
            <h2>#{props.id + 1}</h2>
            <img src={data} alt="" />
            <p className="title"> {props.title}</p>
            <div className="types">
                {
                    types.map(item => <p key={Math.random()} types={types.name}>{item.type.name}</p>)
                }
            </div>
        </Wrapper>
    );
}


export default Pokemon;

const Wrapper = styled(Link)`
    padding: 20px;
    background: lightblue;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
    transition: 0.3s ease-in;
    color: white;
    text-decoration: none;
    position: relative;

    :hover {
        background: radial-gradient(121.73% 181.92% at 6.77% 4.33%, #4F5275 0%, #33304B 100%);
        transform: translateY(-10px);
    }

    h2 {
        font-size: 36px;
        position: absolute;
        right: 20px;
    }

    img{
        width: 150px;
    }

    .title {
        text-transform: uppercase;
        font-size: 24px;
    }

    .types {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        p {
            border-radius: 3px;
            font-size: 12px;
            padding: 4px 8px;
            :nth-child(1) {
                background: ${({ types }) => colors["grass"]};
            }

            :nth-child(2) {
                background:  ${({ types }) => colors["poison"]};
            }
        }
    }
`

export const colors = {
    grass: "#74CB48",
    poison: "#A43E9E",
    fire: "#F57D31",
    water: "#6493EB",
    bug: "#A7B723",
    flying: "#A891EC",
    electric: "#F9CF30",
    ghost: "#70559B",
    normal: "#AAA67F",
    psychic: "#FB5584",
    steel: "#B7B9D0",
    rock: "#B69E31",
    fairy: "#EBAFAE",
    fighting: "#6F874C",
    ground: "#B37658",
    ice: "#BDE7FF"
}