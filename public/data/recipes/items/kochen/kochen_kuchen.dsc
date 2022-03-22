kochen_wolfshalmer_apfelkuchen:
    type: item
    material: pumpkin_pie
    display name: <&6>Wolfshalmer Apfelkuchen
    lore:
    - <&f>Ein köstlicher Apfelkuchen,
    - <&f>der sehr saftig ist.
    mechanisms:
        custom_model_data: 10001
    recipes:
        1:
            type: furnace
            cook_time: 10s
            output_quantity: 1
            input: kochen_kuchenteig_wolfshalmer
