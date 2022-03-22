brauen_apfelschnaps:
    type: item
    material: potion[color=co@241,233,197]
    display name: <&6>Apfelschnaps
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&4>Äpfeln
    - <&f>destilliert.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherApfelschnaps|brauen_becherApfelschnaps|brauen_becherApfelschnaps|brauen_becherApfelschnaps|brauen_becherApfelschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzApfel3|brauen_leereFlasche

brauen_prioreisTraubenschnaps:
    type: item
    material: potion[color=co@248,139,248]
    display name: <&d>Prioreisschnaps
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&5>Prioreistrauben
    - <&f>destilliert.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherPrioreistraubenschnaps|brauen_becherPrioreistraubenschnaps|brauen_becherPrioreistraubenschnaps|brauen_becherPrioreistraubenschnaps|brauen_becherPrioreistraubenschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzPrioreisTraube3|brauen_leereFlasche

brauen_traubenschnaps:
    type: item
    material: potion[color=co@248,139,248]
    display name: <&d>Traubenschnaps
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&5>Trauben
    - <&f>destilliert.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_bechertraubenschnaps|brauen_bechertraubenschnaps|brauen_bechertraubenschnaps|brauen_bechertraubenschnaps|brauen_bechertraubenschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzTraube3|brauen_leereFlasche

brauen_birnenschnaps:
    type: item
    material: potion
    display name: <&a>Birnenschnaps
    mechanisms:
        custom_model_data: 40034
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&a>Birnen
    - <&f>destilliert.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherBirnenschnaps|brauen_becherBirnenschnaps|brauen_becherBirnenschnaps|brauen_becherBirnenschnaps|brauen_becherBirnenschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzBirne3|brauen_leereFlasche

brauen_orangenschnaps:
    type: item
    material: potion[color=co@255,94,0]
    display name: <&6>Orangenschnaps
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&a>Orangen
    - <&f>destilliert.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherOrangenschnaps|brauen_becherOrangenschnaps|brauen_becherOrangenschnaps|brauen_becherOrangenschnaps|brauen_becherOrangenschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzOrange3|brauen_leereFlasche

brauen_pflaumenschnaps:
    type: item
    material: potion
    display name: <&6>Pflaumenschnaps
    lore:
    - <&f>Sehr starker, aber fruchtiger Schnaps aus <&5>Pflaumen
    - <&f>destilliert.
    mechanisms:
        custom_model_data: 40035
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherPflaumenschnaps|brauen_becherPflaumenschnaps|brauen_becherPflaumenschnaps|brauen_becherPflaumenschnaps|brauen_becherPflaumenschnaps|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzPflaume3|brauen_leereFlasche

brauen_pfefferminzlikoer:
    type: item
    material: potion[color=co@0,82,66]
    display name: <&6>Pfefferminzlikör
    lore:
    - <&f>Ein hochprozentiges Getränk, das
    - <&f>mit seinem intensiven <&a>Pfefferminzgeschmack
    - <&f>heraussticht.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherReinerAlkohol|kraeuter_pfefferminze|landwirtschaft_zucker|brauen_leereFlasche