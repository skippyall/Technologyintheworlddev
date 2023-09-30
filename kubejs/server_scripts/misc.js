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
})