const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"


const getCharById = (req, res) =>{
    const {id} = req.params;

    axios(`${URL}${id}`)
    .then(response => {
        // const {id,name,status,species,gender,origin,image} = res.data
        const character = {
            id : response.data.id,
            name: response.data.name,
            status: response.data.status,
            species: response.data.species,
            gender: response.data.gender,
            origin: response.data.origin.name,
            image: response.data.image,

        }
        character.name 
        ? res.status(200).json(character)
        : res.status(404).send("Not found")
       
    })
    .catch((error)=>{
     res.status(500).json({message: error.message})
    })
}
module.exports = getCharById