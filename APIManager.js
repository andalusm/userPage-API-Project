//This is the class that will manage all your APIs
const USER_API = "https://randomuser.me/api/"
const QUOTE_API = "https://api.kanye.rest/"
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/"
const MEAT_API = "https://baconipsum.com/api/?type=meat-and-filler"
const FRIENDS_API = "https://randomuser.me/api/?results=7&inc=name"


class APIManager {
    constructor() {
        this.data = {}
    }
    getUser(){
        return $.get(USER_API)
        
    }
    getQuote(){
        return $.get(QUOTE_API)
        
    }
    getPokemon(){
        const pokemonID = Math.floor(Math.random() * 949) + 1; 
        return $.get(POKEMON_API+pokemonID);
    }
    getMeatFiller(){
        return $.get(MEAT_API)
        
    }
    getFriends(){
        return $.get(FRIENDS_API)
        
    }
    getData(){
        
        return Promise.all([this.getUser(), this.getQuote(),this.getPokemon(), this.getMeatFiller(), this.getFriends()])
        .then((allPromises)=>{
            let [user, quote, pokemon, meatFiller, friends] = allPromises
            const name = user.results[0].name.first+" "+ user.results[0].name.last
            const location = user.results[0].location.city +", "+user.results[0].location.state
            this.data['user'] = {picture:user.results[0].picture.large, name: name,location: location}
            const names = friends.results.map(f=> f.name.first+ " "+ f.name.last)
            
            this.data['quote'] = quote['quote']
            this.data['friends'] = names
            this.data['meat'] = meatFiller[0]
            const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
            const types = pokemon.types.map(p=>p.type.name)
            this.data['pokemon'] = {name:pokemonName, picture: pokemon.sprites["front_default"], type: types}            
            
        })
        .catch((error)=>{
            console.log("Some APIs failed");
        })
        
    }


}
