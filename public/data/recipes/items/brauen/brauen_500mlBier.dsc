brauen_krugKristallweizen:
    type: item
    material: potion
    display name: <&6>Krug Kristallweizen
    mechanisms:
        custom_model_data: 40007
    lore:
    - <&f>Ein erfrischender, klarer Genuss.
    flags:
        glas: true
    recipes:
        umfuellen:
            recipe_id: umfuellen_kristallweizen
            type: shapeless
            output_quantity: 2
            input: brauen_kristallweizen

brauen_krugMalzbier:
    type: item
    material: potion
    display name: <&6>Krug Malzbier
    mechanisms:
        custom_model_data: 40007
    lore:
    - <&f>Malzig und prickelnd
    flags:
        glas: true
    recipes:
        umfuellen:
            recipe_id: umfuellen_malzbier
            type: shapeless
            output_quantity: 2
            input: brauen_malzbier

brauen_krugDunkelbier:
    type: item
    material: potion
    display name: <&6>Krug Dunkelbier
    mechanisms:
        custom_model_data: 40007
    lore:
    - <&f>Dunkel und voll im Geschmack!
    flags:
        glas: true
    recipes:
        umfuellen:
            recipe_id: umfuellen_dunkelbier
            type: shapeless
            output_quantity: 2
            input: brauen_dunkelbier

brauen_krugHelles:
    type: item
    material: potion
    display name: <&6>Krug Helles Bühlmarker
    mechanisms:
        custom_model_data: 40007
    lore:
    - <&f>Leicht und erfrischend!
    flags:
        glas: true
    recipes:
        umfuellen:
            recipe_id: umfuellen_helles
            type: shapeless
            output_quantity: 2
            input: brauen_helles