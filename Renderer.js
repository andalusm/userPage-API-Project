const TYPES = "normal fire water electric grass ice fighting poison ground flying psychic bug rock ghost dragon dark steel fairy "
class Renderer {
    
    constructor(){

    }
    render(container, handleTemplate, attribute){
        $(container).empty()
        const source = $(handleTemplate).html();
        const template = Handlebars.compile(source);
        let newHTML = template(attribute );
        $(container).append(newHTML)
    }

    renderUser(user){
        this.render(".user-container",'#user-template', user)

    }
    renderQuote(quote){
        this.render(".quote-container",'#quote-template', quote)
        
    }
    renderMeatFiller(meatFiller){
        this.render(".meat-container",'#meatFiller-template', meatFiller)
    }
    renderFriends(friends){
        this.render(".friends-container",'#friends-template', friends)
    }
    renderPokemon(pokemon){
        this.render(".pokemon-container","#pokemon-template",pokemon)
        $(".user-container").removeClass(TYPES);
        $(".friends").removeClass(TYPES);
        $(".user-container").addClass(pokemon.type[0])
        $(".friends").addClass(pokemon.type[0])
        if(pokemon.type.length > 1 )
        {
            $("button").removeClass(TYPES);
            $("button").addClass(pokemon.type[1])
        }

    }
    renderOptions(users){
        this.render("#user-select","#user-select-template",users)
    }
    renderAll(data){
        this.renderUser(data.user)
        this.renderQuote(data.quote)
        this.renderMeatFiller(data.meat)
        this.renderPokemon(data.pokemon)
        this.renderFriends(data.friends)
    }


}