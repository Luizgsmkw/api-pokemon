import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PokenDetails = () => {
  

  const [pokemons, setPOkemons] = useState({});
  const [pokemonsType, setPOkemonsType] = useState();
  const {id} = useParams()
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
    .then(response => response.data)
    .then(data => setPOkemons(data))
    
    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
    .then(response => response.data)
    .then(data => setPOkemonsType(data.types[0].type.name))
   
  }, []);
  

  return (
      <div>
            <p>{pokemons.name}</p>
            <p>{pokemonsType}</p>
      </div>)
};

export default PokenDetails;
