#Stahl

schmieden_stahlschaufelkopf:
    type: item
    material: iron_ingot
    display name: <&6>Stahlschaufelkopf
    mechanisms:
        custom_model_data: 70005

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlplatte_mittel

schmieden_stahlschaufel:
    type: item
    material: iron_shovel
    display name: <&6>Stahlschaufel
    mechanisms:
        custom_model_data: 10001
    lore:
    - <&f>Eine einfache Schaufel aus Stahl.

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlschaufelkopf|schreinern_werkzeugstiel_gross

#Schmiedeeisen

schmieden_eisenschaufelkopf:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenschaufelkopf
    mechanisms:
        custom_model_data: 70805

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_schmiedeeisenplatte_mittel

schmieden_eisenschaufel:
    type: item
    material: iron_shovel
    display name: <&6>Schmiedeeisenschaufel
    mechanisms:
        custom_model_data: 10001
    lore:
    - <&f>Eine einfache Schaufel aus Schmiedeeisen.

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisenschaufelkopf|schreinern_werkzeugstiel_gross