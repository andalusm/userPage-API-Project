let users = JSON.parse(localStorage.users || "{}")
const render = new Renderer()
const apiManager = new APIManager()


const generate = function(){
    apiManager.getData().then(()=>{
        render.renderAll(apiManager.data)
    })
}
const loadUser = function(){
    const text = $("#user-select").find(":selected").text()
    let option = users[text]
    render.renderAll(option)
}

const saveUser = function(){
    const name = apiManager.data.user.name
    users[name] = JSON.parse(JSON.stringify(apiManager.data))
    localStorage.users = JSON.stringify(users)
    render.renderOptions(Object.keys(users))
}
render.renderOptions(Object.keys(users))

apiManager.getData().then(()=>{
    render.renderAll(apiManager.data)
})