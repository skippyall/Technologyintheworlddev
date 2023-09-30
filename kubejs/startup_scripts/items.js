StartupEvents.registry('item', e => {
    e.create("dyed_coal")
    e.create("unrefined_diamond")
    e.create("dirty_diamond")
    e.create("unfinished_ancient_debris")
    e.create("unfinished_terra_shard")
    e.create("terra_shard")
})

StartupEvents.registry('block', e => {
    e.create("terra_block")
    .hardness(5)
    .resistance(5)
    .soundType("metal")
    .tagBlock("mineable/shovel")
})