let users = JSON.parse(localStorage.users || "{}")
const render = new Renderer()
const apiManager = new APIManager()
apiManager.getData(render)

const generate = function(){
    apiManager.getData(render)
}
const loadUser = function(){
    const text = $("#user-select").find(":selected").text()
    let option = users[text]
    render.renderAll(option.user, option.quote, option.pokemon,option.meat,option.friends)
}

const saveUser = function(){
    const name = apiManager.data.user.name
    users[name] = JSON.parse(JSON.stringify(apiManager.data))
    localStorage.users = JSON.stringify(users)
    render.renderOptions(Object.keys(users))
}
render.renderOptions(Object.keys(users))

