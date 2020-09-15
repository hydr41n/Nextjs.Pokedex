import PokeList from './pokelist'


function Pokedex() {
  return(
    <div className="hero is-light zoom">
		<div className="hero-body">
			<div className="container">
      			<PokeList/>
      		</div>
      	</div>
    </div>
  )
}

export default Pokedex