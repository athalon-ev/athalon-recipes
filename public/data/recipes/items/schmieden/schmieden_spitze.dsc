schmieden_stahlspitze:
    type: item
    material: iron_ingot
    display name: <&6>Stahlspitze
    mechanisms:
        custom_model_data: 70015

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlstab|schmieden_stahlstab|schmieden_stahlstab
            - air|air|air

schmieden_eisenspitze:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenpitze
    mechanisms:
        custom_model_data: 70815

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_eisenstab|schmieden_eisenstab|schmieden_eisenstab
            - air|air|air