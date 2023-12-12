//This is the class that will manage all your APIs
const USER_API = "https://randomuser.me/api/"
const QUOTE_API = "https://api.kanye.rest/"
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/"
const MEAT_API = "https://baconipsum.com/api/?type=meat-and-filler"
const FRIENDS_COUNT = 7
const FRIENDS_API = "https://randomuser.me/api/?results=" + FRIENDS_COUNT + "&inc=name"
const POKEMON_COUNT = 949


class APIManager {
    constructor() {
        this.data = {}
    }
    getUser() {
        return $.get(USER_API)
    }
    getQuote() {
        return $.get(QUOTE_API)
    }
    getRandomPokemonId() {
        return Math.floor(Math.random() * POKEMON_COUNT) + 1;
    }
    getPokemon() {
        return $.get(POKEMON_API + this.getRandomPokemonId());
    }
    getMeatFiller() {
        return $.get(MEAT_API)

    }
    getFriends() {
        return $.get(FRIENDS_API)
    }
    handleUser(user) {
        const name = user.results[0].name.first + " " + user.results[0].name.last
        const location = user.results[0].location.city + ", " + user.results[0].location.state
        this.data['user'] = { picture: user.results[0].picture.large, name: name, location: location }
    }
    handleQuote(quote) {
        this.data['quote'] = quote['quote']
    }
    handlePokemon(pokemon) {
        const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
        const types = pokemon.types.map(p => p.type.name)
        this.data['pokemon'] = { name: pokemonName, picture: pokemon.sprites["front_default"], type: types }
    }
    handleMeat(meatFiller) {
        this.data['meat'] = meatFiller[0]
    }
    handleFriends(friends) {
        const names = friends.results.map(f => f.name.first + " " + f.name.last)
        this.data['friends'] = names
    }
    getData() {
        return Promise.all([this.getUser(), this.getQuote(), this.getPokemon(), this.getMeatFiller(), this.getFriends()])
            .then((allPromises) => {
                let [user, quote, pokemon, meatFiller, friends] = allPromises
                this.handleUser(user)
                this.handleQuote(quote)
                this.handlePokemon(pokemon)
                this.handleMeat(meatFiller)
                this.handleFriends(friends)
            })
            .catch((error) => {
                console.log("Some APIs failed");
            })
    }


}
