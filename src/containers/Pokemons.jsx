import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Loader from "../components/Loader"
import Pokemon from "../components/Pokemon"

const Pokemons = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(response => {
                setData(response.data.results)
                setLoader(false)
            })
    }, [])

    return (
        <PokemonsContainer>
            {loader && <Loader />}
            {data.map((item, id) => <Pokemon id={id} key={id} title={item.name} url={item.url} />)}
        </PokemonsContainer>
    )
}

export default Pokemons;


const PokemonsContainer = styled.div`
    min-height: 100vh;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

`