schmieden_nagel:
    type: item
    material: iron_ingot
    display name: <&6>Nagel
    mechanisms:
        custom_model_data: 72000

    recipes:
        1:
            type: shapeless
            output_quantity: 2
            input: schmieden_stahlnugget_klein
        2:
            type: shapeless
            output_quantity: 2
            input: schmieden_eisennugget_klein
        3:
            type: furnace
            cook_time: 4s
            output_quantity: 2
            input: schmieden_gusseisennugget_klein