ServerEvents.recipes(event => {
    event.remove({"output":"farmersdelight:cooking_pot"})
    event.shaped("farmersdelight:cooking_pot",[
        "BSB",
        "IWI",
        "III",
    ],{
        "B":"minecraft:brick",
        "S":"minecraft:iron_shovel",
        "W":"minecraft:water_bucket",
        "I":"minecraft:iron_ingot"
    })
})