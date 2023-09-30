ServerEvents.recipes(event=>{
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "minecraft:basalt"
        },
        "loops": 10,
        "results": [
            {
                "item": "minecraft:ancient_debris",
                "chance": 0.1
            },
            {
                "item": "create:sturdy_sheet",
                "chance": 0.9
            }
        ],
        "sequence": [
            createRecipe(event,"create:deploying",[Item.of("kubejs:unfinished_ancient_debris"),Item.of("minecraft:diamond")],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:filling",[Item.of("kubejs:unfinished_ancient_debris"),{"fluid":"createaddition:bioethanol","amount":40500}],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:deploying",[Item.of("kubejs:unfinished_ancient_debris"),Item.of("create:precision_mechanism")],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:filling",[Item.of("kubejs:unfinished_ancient_debris"),{"fluid":"create:potion","amount":40500,"nbt":{"Potion":"minecraft:strong_turtle_master"}}],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:filling",[Item.of("kubejs:unfinished_ancient_debris"),{"fluid":"minecraft:lava","amount":40500}],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:deploying",[Item.of("kubejs:unfinished_ancient_debris"),Item.of("create:sturdy_sheet")],[Item.of("kubejs:unfinished_ancient_debris")]).json,
            createRecipe(event,"create:pressing",[Item.of("kubejs:unfinished_ancient_debris")],[Item.of("kubejs:unfinished_ancient_debris")]).json
        ],
        "transitionalItem": {
            "item": "kubejs:unfinished_ancient_debris"
        }
    })
})