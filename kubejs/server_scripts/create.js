

ServerEvents.recipes(event => {
    event.remove({"output":"create:mechanical_crafter"})
    event.shaped("create:mechanical_crafter",[
        "T",
        "C",
        "B"
    ],{
        "T":"minecraft:redstone_torch",
        "C":"ae2:molecular_assembler",
        "B":"create:brass_casing"
    })
    event.remove({"id":"create:splashing/gravel"})
})