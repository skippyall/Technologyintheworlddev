ServerEvents.recipes(event=>{
    event.remove({"type":"create:crushing","input":"#create:stone_types/tuff"})
    createRecipe(event,"create:milling",[Item.of("create:scoria")],[{"item":"create:copper_nugget","chance":0.2}],{"processingTime": 50})
    createRecipe(event,"create:milling",[Item.of("minecraft:tuff")],[{"item":"create:zinc_nugget","chance":0.2}],{"processingTime": 50})
    createRecipe(event,"create:compacting",[Item.of("ae2:certus_quartz_crystal"),Item.of("minecraft:blue_dye")],[Item.of("minecraft:lapis_lazuli")],{})
    event.custom({
        "ingredient": {
            "item": "minecraft:sand"
        },
        "result": {
            "count": 1,
            "item": "minecraft:redstone"
        },
        "type": "magnets:magnetize"
    })
    createRecipe(event,"create:mixing",[Item.of("minecraft:andesite"),Item.of("minecraft:cobblestone")],[Item.of("minecraft:tuff")],{})
})