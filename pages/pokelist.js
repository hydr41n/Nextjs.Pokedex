import axios from 'axios';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



function PokeList() {
  const defaultImg ="https://cdn.pixabay.com/photo/2016/07/23/13/21/pokemon-1536855_960_720.png"
  const pokeUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const router = useRouter()
  const [pokemon,setPokemon] = useState([])
  const [pokemonF,setPokemonF] = useState([])
  const [search,setSearch] = useState('')

  let results = async function fetchData() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0");
      setPokemon(res.data.results);
      setPokemonF(res.data.results);
    }

  function pokemonFilter(x){
    setSearch(x)
    let res = pokemonF.filter(obj => Object.values(obj).some(val => val.includes(x)))
    setPokemon(res)
  }

  useEffect(() => {
    results()
  },[]);


  return (
    <div className="columns is-multiline">


      <input className="input is-danger is-large  is-focused" type="text" placeholder="Search Your Pokemon..."  onKeyUp={(e)=>{pokemonFilter(e.target.value)}}/>


      {pokemon.map((pokemon, id)=> {
        const pID = pokemon.url.split('/')[6]
        const pURL = pokeUrl+pID+'.png'
        return (
                <div className="column is-one-third"  key={id}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-square">
                          <img loading="lazy" src={pURL} onError={(e)=>{e.target.onError=null;e.target.src=`${defaultImg}`}} alt={pokemon.name}/>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content has-text-centered">
                          <h1 className="is-size-1-mobile">{pokemon.name}</h1>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <p className="card-footer-item has-background-danger">
                          <span>
                            <a className="has-text-white" onClick={() => router.push({pathname:'/pokemon', query:{pokemon:`${pokemon.name}`,id:`${pID}`}})}>View Pokemon</a>
                          </span>
                        </p>
                      </footer>
                    </div>
                </div>
              )
      })}
    </div>
  )
}



export default PokeList