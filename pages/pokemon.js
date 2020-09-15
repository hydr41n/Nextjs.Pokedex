import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Pokemon() {	
    const router = useRouter()
	const defaultImg ="https://cdn.pixabay.com/photo/2016/07/23/13/21/pokemon-1536855_960_720.png"
    const pokeUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    const pURL = pokeUrl+router.query.id+'.png'

    return(
		<section className="hero is-medium is-light is-bold is-fullheight">
			<div className="hero-body hero-body-padding-small">
				<div className="container">
				      <h1 className="title is-capitalized has-text-centered">
				        {router.query.pokemon}
				      </h1>
				  	<a onClick={() => router.back()}>Back</a>            
					<div className="columns">
						<div className="column is-one-third">
							<figure className="image is-square">
						    	<img loading="lazy" src={pURL} onError={(e)=>{e.target.onError=null;e.target.src=`${defaultImg}`}} alt={router.query.pokemon}/>
						  	</figure>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Pokemon