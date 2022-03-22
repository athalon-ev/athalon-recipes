schmieden_stahlstab:
    type: item
    material: iron_ingot
    display name: <&6>Stahlstab
    mechanisms:
        custom_model_data: 70016

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|schmieden_stahlnugget_gross|air
            - air|schmieden_stahlnugget_gross|air
            - air|schmieden_stahlnugget_gross|air

schmieden_eisenstab:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenstab
    mechanisms:
        custom_model_data: 70816

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|schmieden_eisennugget_gross|air
            - air|schmieden_eisennugget_gross|air
            - air|schmieden_eisennugget_gross|air