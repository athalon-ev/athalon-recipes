brauen_becherApfelwein:
    type: item
    material: potion[color=co@yellow]
    display name: <yellow>Apfelwein
    flags:
        glas: true
    lore:
    - <&f>Ein Glas leckerer Apfelwein.
    recipes:
        umfuellen_apfelwein:
            recipe_id: umfuellen_apfelwein
            type: shapeless
            output_quantity: 5
            input: brauen_apfelwein

brauen_becherWolfshalmerApfeltraum:
    type: item
    material: potion[color=co@yellow]
    display name: <yellow>Wolfshalmer Apfeltraum
    flags:
        glas: true
    lore:
    - <&f>Ein Glas leckerern Wolfshalmer
    - <&f>Apfeltraum.
    recipes:
        umfuellen_wolfshalmer_apfeltraum:
            recipe_id: umfuellen_wolfshalmer_apfeltraum
            type: shapeless
            output_quantity: 5
            input: brauen_wolfshalmer_apfeltraum

brauen_becherPrioreisTraubenwein:
    type: item
    material: potion
    display name: <&6>Prioreiswein
    mechanisms:
        custom_model_data: 40038
    lore:
    - <&f>Ein Glas des leckeren
    - <&f>Prioreisweines
    flags:
        glas: true
    recipes:
        umfuellen_prioreistraubenwein:
            recipe_id: umfuellen_prioreistraubenwein
            type: shapeless
            output_quantity: 5
            input: brauen_prioreisTraubenwein

brauen_becherPrioreisTraubenweinEis:
    type: item
    material: potion
    display name: <&b>Prioreiswein
    mechanisms:
        custom_model_data: 40040
    lore:
    - <&f>Ein Glas des leckeren
    - <&e>hellen <&f>Prioreisweines.
    flags:
        glas: true
    recipes:
        umfuellen_prioreistraubenweineis:
            recipe_id: umfuellen_prioreistraubenweineis
            type: shapeless
            output_quantity: 5
            input: brauen_prioreisTraubenweinEis

brauen_becherTraubenwein:
    type: item
    material: potion[color=co@248,139,248]
    display name: <&6>Traubenwein
    lore:
    - <&f>Ein Glas leckerer Wein.
    flags:
        glas: true
    recipes:
        umfuellen_traubenwein:
            recipe_id: umfuellen_traubenwein
            type: shapeless
            output_quantity: 5
            input: brauen_traubenwein

brauen_becherBirnenwein:
    type: item
    material: potion[color=co@188,222,17]
    display name: <&a>Birnenwein
    lore:
    - <&f>Ein Glas leckerer Birnenwein.
    flags:
        glas: true
    recipes:
        umfuellen_birnenwein:
            recipe_id: umfuellen_birnenwein
            type: shapeless
            output_quantity: 5
            input: brauen_birnenwein

brauen_becherOrangenwein:
    type: item
    material: potion[color=co@255,94,0]
    display name: <&6>Orangenwein
    lore:
    - <&f>Ein Glas leckerer Orangenwein.
    flags:
        glas: true
    recipes:
        umfuellen_Orangenwein:
            recipe_id: umfuellen_orangenwein
            type: shapeless
            output_quantity: 5
            input: brauen_orangenwein

brauen_becherKirschenwein:
    type: item
    material: potion[color=co@red]
    display name: <&c>Kirschwein
    lore:
    - <&f>Ein Glas des leckeren
    - <&f>Kirschwein
    flags:
        glas: true
    recipes:
        umfuellen_kirschenwein:
            recipe_id: umfuellen_kirschenwein
            type: shapeless
            output_quantity: 5
            input: brauen_kirschenwein

brauen_becherPflaumenwein:
    type: item
    material: potion[color=co@purple]
    display name: <&c>Pflaumenwein
    lore:
    - <&f>Ein Glas leckerer Pflaumenwein.
    flags:
        glas: true
    recipes:
        umfuellen_pflaumenwein:
            recipe_id: umfuellen_pflaumenwein
            type: shapeless
            output_quantity: 5
            input: brauen_pflaumenwein

brauen_becherHonigwein:
    type: item
    material: potion[color=co@yellow]
    display name: <yellow>Honigwein
    lore:
    - <&f>Ein Glas leckerer Honigwein.
    flags:
        glas: true
    recipes:
        umfuellen_honigwein:
            recipe_id: umfuellen_honigwein
            type: shapeless
            output_quantity: 5
            input: brauen_honigwein

brauen_becherGluehwein:
    type: item
    material: potion
    display name: <&6>❄ Heißer Glühwein ❄
    lore:
    - <&f>[<&6>-<&f>] Ein heißer Becher
    - <&f>Prioreiswein, der in der
    - <&f>kalten Jahreszeit wärmt.
    - <&f>[<&6>-<&f>] Hat einen leckeren,
    - <&f>fruchtigen Geschmack.
    mechanisms:
        custom_model_data: 40039
    flags:
        glas: true