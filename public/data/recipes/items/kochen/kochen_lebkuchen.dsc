kochen_lebkuchen_mann:
    type: item
    material: bread
    display name: <&6>Lebkuchenmann
    mechanisms:
        custom_model_data: 10002
    lore:
    - <&f>Lecker Lebkuchen.

    recipes:
        1:
            type: shapeless
            output_quantity: 8
            input: kochen_mehl|kochen_mehl|landwirtschaft_zucker|landwirtschaft_zucker|landwirtschaft_huehnerei|landwirtschaft_huehnerei|landwirtschaft_huehnerei

kochen_amelies_lebkuchen:
    type: item
    material: bread
    display name: <&6>Amélies Lebkuchen
    mechanisms:
        custom_model_data: 10002
    lore:
    - <&f>Ein Genuss für die kalte Jahreszeit.

    recipes:
        1:
            type: shapeless
            output_quantity: 8
            input: sonstiges_honig_glas|kochen_mehl|kochen_mehl|landwirtschaft_zucker|landwirtschaft_zucker|landwirtschaft_huehnerei|landwirtschaft_huehnerei|landwirtschaft_huehnerei

kochen_amelies_lebkuchen_spezial:
    type: item
    material: bread
    display name: <&6>Amélies Lebkuchen Spezial
    mechanisms:
        custom_model_data: 10002
    lore:
    - <&f>Ein leckerer Lebkuchemann mit <&c>Kakao- <&f>und
    - <&6>Honigfüllung<&f>.
    - <&f>Ein Genuss für die kalte Jahreszeit.
    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: kochen_amelies_lebkuchen|kochen_amelies_lebkuchen|sonstiges_honig_glas|landwirtschaft_kakao