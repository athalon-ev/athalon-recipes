schmieden_stahlspitzhackenkopf:
    type: item
    material: iron_ingot
    display name: <&6>Stahlspitzhackenkopf
    mechanisms:
        custom_model_data: 70005

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlspitze|schmieden_stahlplatte_mittel|schmieden_stahlspitze

schmieden_stahlspitzhacke:
    type: item
    material: iron_pickaxe
    display name: <&6>Stahlspitzhacke
    lore:
    - <&f>Eine einfache Spitzhacke aus Stahl.
    mechanisms:
        custom_model_data: 1

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlspitzhackenkopf|schreinern_werkzeugstiel_mittel

#Schmiedeeisen
schmieden_eisenspitzhackenkopf:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenspitzhackenkopf
    mechanisms:
        custom_model_data: 70805

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_eisenspitze|schmieden_schmiedeeisenplatte_mittel|schmieden_eisenspitze

schmieden_eisenspitzhacke:
    type: item
    material: iron_pickaxe
    display name: <&6>Schmiedeeisenspitzhacke
    lore:
    - <&f>Eine einfache Spitzhacke aus Schmiedeeisen.
    mechanisms:
        custom_model_data: 1

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisenspitzhackenkopf|schreinern_werkzeugstiel_mittel