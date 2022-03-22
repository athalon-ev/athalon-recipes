schmieden_stahlnugget_gross:
    type: item
    material: iron_ingot
    display name: <&6>Stahlnugget (Groß)
    mechanisms:
        custom_model_data: 70002

    recipes:
        1:
            type: shapeless
            output_quantity: 9
            input: schmieden_stahlbarren
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlnugget_klein|schmieden_stahlnugget_klein|schmieden_stahlnugget_klein|schmieden_stahlnugget_klein|schmieden_stahlnugget_klein

schmieden_stahlnugget_klein:
    type: item
    material: iron_ingot
    display name: <&6>Stahlnugget (Klein)
    mechanisms:
        custom_model_data: 70003

    recipes:
        1:
            type: shapeless
            output_quantity: 5
            input: schmieden_stahlnugget_gross

schmieden_eisennugget_gross:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisennugget (Groß)
    mechanisms:
        custom_model_data: 70802

    recipes:
        1:
            type: shapeless
            output_quantity: 9
            input: schmieden_eisenbarren
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisennugget_klein|schmieden_eisennugget_klein|schmieden_eisennugget_klein|schmieden_eisennugget_klein|schmieden_eisennugget_klein

schmieden_eisennugget_klein:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisennugget (Klein)
    mechanisms:
        custom_model_data: 70803

    recipes:
        1:
            type: shapeless
            output_quantity: 5
            input: schmieden_eisennugget_gross

schmieden_gusseisennugget_gross:
    type: item
    material: iron_ingot
    display name: <&6>Gusseisennugget (Groß)
    mechanisms:
        custom_model_data: 70202

    recipes:
        1:
            type: shapeless
            output_quantity: 9
            input: schmieden_gusseisenbarren
        2:
            type: shapeless
            output_quantity: 1
            input: schmieden_gusseisennugget_klein|schmieden_gusseisennugget_klein|schmieden_gusseisennugget_klein|schmieden_gusseisennugget_klein|schmieden_gusseisennugget_klein

schmieden_gusseisennugget_klein:
    type: item
    material: iron_ingot
    display name: <&6>Gusseisennugget (Klein)
    mechanisms:
        custom_model_data: 70203

    recipes:
        1:
            type: shapeless
            output_quantity: 5
            input: schmieden_gusseisennugget_gross