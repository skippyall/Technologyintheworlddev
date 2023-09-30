// priority:0

ServerEvents.recipes(event => {
      event.remove({output:'computercraft:computer_normal'})
      event.remove({output:'computercraft:computer_advanced'})
      event.shaped('1x computercraft:computer_normal',[
          'SSS',
          'SPS',
          'SGS'
        ], {
          S: 'create:iron_sheet',
          P: 'create:precision_mechanism',
          G: 'minecraft:glass_pane'
      })
      event.shaped('computercraft:computer_advanced',[
        'SES',
        'SCS',
        'III'
      ],{
        S:'create:sturdy_sheet',
        E:'create:electron_tube',
        C:'computercraft:computer_normal',
        I:'create:iron_sheet'
      })

      event.shaped('computercraft:pocket_computer_advanced',[
              'SES',
              'SCS',
              'III'
            ],{
              S:'create:sturdy_sheet',
              E:'create:electron_tube',
              C:'computercraft:pocket_computer_normal',
              I:'create:iron_sheet'
            })

      event.remove({id:'computercraft:pocket_computer_normal'})
      event.remove({id:'computercraft:pocket_computer_advanced'})
      event.remove({id:'computercraft:pocket_computer_advanced_upgrade'})
      createRecipe(event,"create:pressing",[Item.of('computercraft:computer_normal')],[Item.of('computercraft:pocket_computer_normal')],{})
      createRecipe(event,"create:pressing",[Item.of('computercraft:computer_advanced')],[Item.of('computercraft:pocket_computer_advanced')],{})

      event.remove({id:'computercraft:turtle_normal'})
      event.remove({id:'computercraft:turtle_advanced'})
      event.remove({id:'computercraft:turtle_advanced_upgrade'})
      event.shapeless("computercraft:turtle_normal",["computercraft:computer_normal","immersive_aircraft:quadrocopter"])
      event.shapeless("computercraft:turtle_advanced",["computercraft:computer_advanced","immersive_aircraft:quadrocopter"])

      event.remove({output:'computercraft:wireless_modem_normal'})
      event.remove({output:'computercraft:wireless_modem_advanced'})
      event.shaped('computercraft:wireless_modem_normal',[
        'BEB',
        'BMB',
        'BSB'
      ],{
        B:'create:brass_ingot',
        E:'create:electron_tube',
        M:'minecraft:ender_pearl',
        S:'createaddition:copper_spool'
      })
      event.shaped('computercraft:wireless_modem_advanced',[
        'SNS',
        'EME',
        'GGG'
      ],{
        S:'create:sturdy_sheet',
        N:'minecraft:netherite_ingot',
        E:'minecraft:end_stone',
        M:'computercraft:wireless_modem_normal',
        G:'minecraft:diamond'
      })
})