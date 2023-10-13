ServerEvents.recipes(event=>{
    createRecipe(event,"create:compacting",[Item.of("minecraft:charcoal")],
        [Item.of("minecraft:coal")],{"heatRequirement": "superheated"})
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "item": "minecraft:coal_block"
        },
        "loops": 1,
        "results": [
            {
                "item": "kubejs:unrefined_diamond"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:dyed_coal"
                    },
                    {
                        "item": "ae2:certus_quartz_crystal"
                    }
                ],
                "results": [
                    {
                        "item": "kubejs:dyed_coal"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "kubejs:dyed_coal"
                    }
                ],
                "results": [
                    {
                        "item": "kubejs:dyed_coal"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "kubejs:dyed_coal"
                    }
                ],
                "results": [
                    {
                        "item": "kubejs:dyed_coal"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "kubejs:dyed_coal"
        }
    })
    createRecipe(event,"create:crushing",[Item.of("kubejs:unrefined_diamond")],
        [{"item":"kubejs:dirty_diamond","chance":0.1}],{"processingTime": 50})
    createRecipe(event,"create:splashing",[Item.of("kubejs:dirty_diamond")],
        [Item.of("minecraft:diamond")],{})
})