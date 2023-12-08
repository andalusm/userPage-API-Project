//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    getUser(){
        return $.get("https://randomuser.me/api/")
        
    }
    getQuote(){
        return $.get("https://api.kanye.rest/")
        
    }
    getPokemon(){
        const pokemonID = Math.floor(Math.random() * 949) + 1; 
        return $.get("https://pokeapi.co/api/v2/pokemon/"+pokemonID);
    }
    getMeatFiller(){
        return $.get("https://baconipsum.com/api/?type=meat-and-filler")
        
    }
    getFriends(){
        return $.get("https://randomuser.me/api/?results=7&inc=name")
        
    }
    getData(render){
        
        Promise.all([this.getUser(), this.getQuote(),this.getPokemon(), this.getMeatFiller(), this.getFriends()])
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
            this.data['pokemon'] = {name:pokemonName, picture: pokemon.sprites["front_default"]}            
            render.renderAll(this.data['user'], this.data['quote'], this.data['pokemon'], this.data['meat'], this.data['friends'])
        })
        .catch((error)=>{
            console.log("Some APIs failed");
        })
        
    }


}

// get 7 users https://randomuser.me/api/?results=7

// random quote https://api.kanye.rest/


//meat filler   https://baconipsum.com/api/?type=meat-and-filler