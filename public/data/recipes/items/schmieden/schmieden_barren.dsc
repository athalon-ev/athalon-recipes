schmieden_eisenbarren:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenbarren
    mechanisms:
        custom_model_data: 70800
    recipes:
        1:
            type: furnace
            cook_time: 8s
            input: schmieden_eisengemisch
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross

schmieden_gusseisenbarren:
    type: item
    material: iron_ingot
    display name: <&6>Gusseisenbarren
    mechanisms:
        custom_model_data: 70800

    recipes:
        1:
            type: furnace
            cook_time: 8s
            input: schmieden_schmiedeeisengemisch
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross|schmieden_gusseisennugget_gross

schmieden_stahlbarren:
    type: item
    material: iron_ingot
    display name: <&6>Stahlbarren
    mechanisms:
        custom_model_data: 70000

    recipes:
        1:
            type: blast
            cook_time: 8s
            input: schmieden_schmiedeeisengemisch
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross