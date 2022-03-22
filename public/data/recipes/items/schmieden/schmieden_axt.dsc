# Stahlaxt

schmieden_stahlaxtkopf_gross:
    type: item
    material: iron_ingot
    display name: <&6>Stahlaxtkopf (Groß)
    mechanisms:
        custom_model_data: 70008

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_gehartete_stahlplatte_mittel|schmieden_gehartete_stahlplatte_mittel|schmieden_gehartete_stahlplatte_mittel

schmieden_stahlaxtkopf_klein:
    type: item
    material: iron_ingot
    display name: <&6>Stahlaxtkopf (Klein)
    mechanisms:
        custom_model_data: 70008

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlplatte_mittel|schmieden_stahlplatte_klein|schmieden_stahlplatte_klein

schmieden_stahlaxt:
    type: item
    material: iron_axe
    display name: <&6>Stahlaxt
    lore:
    - <&f>Beidhändige Axt, für das Holzfällen oder
    - <&f>das Spalten von Holzscheiten.
    mechanisms:
        custom_model_data: 10000

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlaxtkopf_gross|schreinern_werkzeugstiel_gross

schmieden_stahlbeil:
    type: item
    material: iron_axe
    display name: <&6>Stahlbeil
    lore:
    - <&f>Ein einfaches Beil aus Stahl.
    mechanisms:
        custom_model_data: 1

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_stahlaxtkopf_klein|schreinern_werkzeugstiel_mittel

#Schmiedeeisen

schmieden_eisenaxtkopf_klein:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenaxtkopf (Klein)
    mechanisms:
        custom_model_data: 70805

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_schmiedeeisenplatte_mittel|schmieden_schmiedeeisenplatte_klein|schmieden_schmiedeeisenplatte_klein

schmieden_eisenaxtkopf_gross:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenaxtkopf (Groß)
    mechanisms:
        custom_model_data: 70805

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_schmiedeeisenplatte_mittel|schmieden_schmiedeeisenplatte_mittel|schmieden_schmiedeeisenplatte_mittel

schmieden_eisenaxt:
    type: item
    material: iron_axe
    display name: <&6>Schmiedeeisenaxt
    lore:
    - <&f>Beidhändige Axt, für das Holzfällen oder
    - <&f>das Spalten von Holzscheiten.
    mechanisms:
        custom_model_data: 10000

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisenaxtkopf_gross|schreinern_werkzeugstiel_gross

schmieden_eisenbeil:
    type: item
    material: iron_axe
    display name: <&6>Schmiedeeisenbeil
    lore:
    - <&f>Ein einfaches Beil aus Schmiedeeisen.
    mechanisms:
        custom_model_data: 1

    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: schmieden_eisenaxtkopf_klein|schreinern_werkzeugstiel_mittel