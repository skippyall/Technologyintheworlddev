// priority:0

ServerEvents.recipes(event => {
    event.remove({"output":"wirelessnetworks:entangled_capacitor"})
    event.remove({"output":"wirelessnetworks:node_block"})
    event.shaped("wirelessnetworks:node_block",[
        "III",
        "CSC",
        "III"
    ],{
        "I":"create:iron_sheet",
        "C":"createaddition:copper_spool",
        "S":"ae2:quantum_entangled_singularity"
    })

    event.remove({"output":"turtlechargingstation:turtle_charging_station"})
    event.remove({"output":"turtlechargingstation:thundercharge_dynamo"})
    event.shaped("turtlechargingstation:turtle_charging_station",[
        "BGB",
        "GCG",
        "BIB"
    ],{
        "B":"minecraft:black_concrete",
        "G":"createaddition:gold_spool",
        "C":"createaddition:copper_spool",
        "I":"minecraft:iron_block"
    })
    
    event.shaped("minecraft:campfire", [
        " F ",
        "SCS",
        "LLL"
    ],{
        "F":"notreepunching:fire_starter",
        "S":"minecraft:stick",
        "C":"#minecraft:coals",
        "L":"#minecraft:logs"
    })
    
    event.remove({"mod":"butonmoneymod"})
})

ServerEvents.tags("item",event => {
    event.add("c:tools/axes","notreepunching:flint_axe")
})

ServerEvents.entityLootTables(event => {
    event.addEntity("minecraft:vindicator",table => {})
    event.addEntity("minecraft:evoker",table => {
        table.addPool(pool=>{
            pool.addItem("minecraft:totem_of_undying")
        })
    })
})