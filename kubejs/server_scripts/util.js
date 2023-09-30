//priority:10
function createRecipe (event,type,input,output,extra) {
    return event.custom(Object.assign({
        "type": type,
        "ingredients": input,
        "results": output
    },extra))
}