kochen_rohe_rindswurst:
    type: item
    material: carrot
    display name: <&6>Rohe Rindswurst
    lore:
    - <&f>Eine rohe Wurst aus
    - <&f>Rindfleisch
    mechanisms:
        custom_model_data: 40000
    recipes:
        1:
            type: shapeless
            output_quantity: 10
            input: landwirtschaft_darm|kochen_kilogrammRindfleisch
        2:
            type: shapeless
            output_quantity: 1
            input: landwirtschaft_zerstueckelter_darm|kochen_100grammRindfleisch

kochen_rindswurst:
    type: item
    material: cooked_chicken
    display name: <&6>Rindswurst
    lore:
    - <&f>Eine leckere Wurst aus
    - <&f>Rindfleisch.
    mechanisms:
        custom_model_data: 10000
    recipes:
        1:
            type: furnace
            cook_time: 4s
            input: kochen_rohe_rindswurst