import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Pokemon() {
    const pokeUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const router = useRouter()

    return(
        <div>
            <a onClick={() => router.back()}>Back</a>
            <img loading="lazy" src={`${pokeUrl+router.query.id+'.png'}`} alt={router.query.pokemon}/>
            {router.query.pokemon}
        </div>
    )
}

export default Pokemon