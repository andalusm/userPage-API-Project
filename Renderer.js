const TYPES = "normal fire water electric grass ice fighting poison ground flying psychic bug rock ghost dragon dark steel fairy "
class Renderer {

    constructor() {
        this.userContainer = $(".user-container")
        this.userTemplate = $('#user-template')
        this.quoteContainer = $(".quote-container")
        this.quoteTemplate = $('#quote-template')
        this.meatContainer = $(".meat-container")
        this.meatTemplate = $("#meatFiller-template")
        this.friendsContainer = $(".friends-container")
        this.friendsTemplate = $("#friends-template")
        this.pokemonContainer =$(".pokemon-container")
        this.pokemonTemplate = $("#pokemon-template")
        this.userSelectContainer = $("#user-select")
        this.userSelecetTemplate = $("#user-select-template")
        this.friends = $(".friends")
        this.button = $("button")
    }
    render(container, handleTemplate, attribute) {
        container.empty()
        const source = handleTemplate.html();
        const template = Handlebars.compile(source);
        let newHTML = template(attribute);
        container.append(newHTML)
    }

    renderUser(user) {

        this.render(this.userContainer, this.userTemplate, user)
    }
    renderQuote(quote) {
        this.render(this.quoteContainer, this.quoteTemplate, quote)
    }
    renderMeatFiller(meatFiller) {
        this.render(this.meatContainer, this.meatTemplate, meatFiller)
    }
    renderFriends(friends) {
        this.render(this.friendsContainer,this.friendsTemplate, friends)
    }
    renderPokemon(pokemon) {
        this.render(this.pokemonContainer, this.pokemonTemplate, pokemon)
        this.userContainer.removeClass(TYPES);
        this.friends.removeClass(TYPES);
        this.userContainer.addClass(pokemon.type[0])
        this.friends.addClass(pokemon.type[0])
        if (pokemon.type.length > 1) {
            this.button.removeClass(TYPES);
            this.button.addClass(pokemon.type[1])
        }
    }
    renderOptions(users) {
        this.render(this.userSelectContainer, this.userSelecetTemplate , users)
    }
    renderAll(data) {
        this.renderUser(data.user)
        this.renderQuote(data.quote)
        this.renderMeatFiller(data.meat)
        this.renderPokemon(data.pokemon)
        this.renderFriends(data.friends)
    }


}