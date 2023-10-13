ServerEvents.recipes(event => {
    createRecipe(event,"create:sandpaper_polishing",[Item.of("minecraft:sand")],[Item.of("magnets:magnetite")])
    
    event.remove({"id":"magnets:gold"})
})