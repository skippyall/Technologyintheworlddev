ServerEvents.recipes(event => {
    event.remove({"output":"create:mechanical_crafter"})
    event.shaped("3x create:mechanical_crafter",[
        "T",
        "C",
        "B"
    ],{
        "T":"minecraft:redstone_torch",
        "C":"ae2:molecular_assembler",
        "B":"create:brass_casing"
    })
    event.remove({"id":"create:splashing/gravel"})
    event.remove({"output":"create_jetpack:jetpack"})
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            " PSP ",
            "PYXYP",
            "PCECP",
            " C C "
        ],
        "key": {
            "E": Item.of("immersive_aircraft:quadrocopter"),
            "C": Item.of("create:chute"),
            "X": Item.of("create:copper_backtank"),
            "S": Item.of("create:shaft"),
            "Y": Item.of("create:precision_mechanism"),
            "P": Item.of("create:brass_sheet")
        },
        "result": Item.of("create_jetpack:jetpack")
    })
    event.custom({
        "type": "createaddition:charging",
        "energy": 1800,
        "input": Item.of("minecraft:iron_nugget"),
        "result": Item.of("create:experience_nugget")
    })
})