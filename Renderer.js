
class Renderer {
    
    constructor(){

    }
    render(container, handleTemplate, attribute){
        $(container).empty()
        const source = $(handleTemplate).html();
        const template = Handlebars.compile(source);
        let newHTML = template({ attribute });
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
    }
    renderOptions(users){
        this.render("#user-select","#user-select-template",users)
    }
    renderAll(user,quote,pokemon,meat,friends){
        this.renderUser(user)
        this.renderQuote(quote)
        this.renderMeatFiller(meat)
        this.renderPokemon(pokemon)
        this.renderFriends(friends)
    }


}