import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../components/Pokemon"

const PokemonDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [img, setImg] = useState('')
  const [types, setType] = useState([])
  const [ability, setAbility] = useState([])
  const [stats, setStats] = useState([])
  let navigate = useNavigate()

  const fetchPoke = () => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setData(response.data)
        setImg(response.data.sprites.front_default)
        setType(response.data.types)
        setAbility(response.data.abilities)
        setStats(response.data.stats)
      })
  }

  useEffect(fetchPoke, [id])

  function arrow(item) {
    if (item === "left" && id !== "1") {
      navigate(`/pokemons/${Number(id) - 1}`)
    }

    if (item === "right" && id !== "100") {
      navigate(`/pokemons/${Number(id) + 1}`)
    }
  }

  return (
    <Wrapper>
      <i className="fa fa-chevron-left" onClick={() => arrow("left")}></i>
      <div className="main">

        <img className="img__animated" src="https://icon-library.com/images/pokeball-icon-png/pokeball-icon-png-5.jpg" alt="" />
        <div className="top">
          <i onClick={() => navigate("/pokemons")} className="fa fa-home" aria-hidden="true"></i>
          <h2>{data.name}</h2>
          <b>#{data.id}</b>
        </div>
        <div className="image_back">
          <img className="poke-img" src={img} alt="" />
        </div>

        <div className="types">
          {
            types.map(item => <p key={Math.random()}>{item.type.name}</p>)
          }
        </div>

        <div className="about">
          <h3>About</h3>
          <span>
            <p>height: {data.height}m</p>
            <p>weight: {data.weight}kg</p>
          </span>
        </div>

        <div className="abilities">
          <h3>Abilities</h3>
          <span>
            {
              ability.map(item => <p key={Math.random()}>{item.ability.name}</p>)
            }
          </span>
        </div>

        <div className="stats">
          <h3>Base Stats</h3>
          <div className="stats__main">
            <div className="stats__name">
              {
                stats.map(item => <p key={Math.random()}>{item.stat.name}</p>)
              }
            </div>
            <span></span>
            <div className="stats__progress">
              {
                stats.map((item) =>
                  <div key={Math.random()} className="progresses">
                    <p>{item.base_stat} %</p>
                    <div className="progress">
                      <div className="progress__bar" style={{ width: item.base_stat + "%" }}>
                        <div className="progress__bar-back"></div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <i className="fa fa-chevron-right" onClick={() => arrow("right")}></i>

    </Wrapper >

  )
}

export default PokemonDetail;

const Wrapper = styled.div`

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  width: 450px;
  background: lightblue;
  padding: 25px;
  border-radius: 16px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    text-transform: uppercase;

    b{
      font-size: 36px;
    }

    img {
      width: 30px;
      cursor: pointer;
    }
  }
  .about, .abilities {
    text-align: center;
    color: #A43E9E;
    margin-top: 10px;

    span {
      display: flex;
      justify-content: center;
      gap: 20px;

      p {
        font-size: 18px;
        font-weight: 500;
        font-family: 'Courier New', Courier, monospace;
      }
    }
  }

  h3 {
      color: #74CB48;
      font-size: 24px;
    }

  .stats {
    color: #70559B;
    font-weight: 500;
    margin-top: 10px;
    h3 {
      text-align: center;
    }


    .stats__main {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 14px;
      .stats__name {
        text-align: right;
        p {
          margin-bottom: 10px;
        }
      }
      span {
        height: 160px;
        width: 1.5px;
        background-color: #fff;
      }

      .progresses {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .progress {
          width: 200px;
          height: 4px;
          background-color: white;
          border-radius: 2px;
          margin-left: 10px;
          overflow: hidden;
          @media (max-width: 700px) {
            width: 150px;
          }

          .progress__bar {
            height: 100%;
            
            .progress__bar-back {
              border-radius: 2px;
              height: 100%;
              background: linear-gradient(to left, #74CB48, #A43E9E);
              animation-name: progress;
              animation-duration: 1s;
              animation-timing-function: linear;
              animation-iteration-count: 1;
            }
          }
        }
      }
    }
  }
  @keyframes progress {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
  @keyframes imgShow {
    0% {
      transform: translateY(0px) ;
    }

    50% {
      transform: translateY(8px) ;
    }

    100% {
      transform: translateY(0px) ;
    }
  }
  
  .image_back {
    border-radius: 50%;
    width: 140px;
    margin: 20px auto;

      .poke-img {
        display: block;
        margin: 20px auto;
        animation-name: imgShow;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        width: 170px;
      }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: none;
  }

  .types {
        margin-top: 10px;
        display: flex;
        align-items: center;
        
        justify-content: center;
        gap: 10px;

        p {
            border-radius: 3px;
            color: white;
            font-size: 12px;
            padding: 4px 8px;
            :nth-child(1) {
                background: ${({ types }) => colors["grass"]};
            }

            :nth-child(2) {
              background: ${({ types }) => colors["poison"]};
            }
        }
    }

    .img__animated {
      position: absolute;
      width: 130px;
      opacity: 0.2;
      right: 10px;
      top: 20px;
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

    i{
      font-size: 36px;
      color: white;
    }
  }

  i{
    cursor: pointer;
    color: white;
    font-size: 36px;
  }

  .fa-chevron-left {
    position: absolute;
    top: 50%;
    left: 33%;
    transform: translate(-50%, -50%);    
  }

  .fa-chevron-right {
    position: absolute;
    top: 50%;
    left: 67%;
    transform: translate(-50%, -50%);
  }

`
