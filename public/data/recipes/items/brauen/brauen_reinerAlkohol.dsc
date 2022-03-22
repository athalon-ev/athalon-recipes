brauen_reinerAlkohol:
    type: item
    material: potion[display=<&r><&6>Reiner Alkohol;color=co@white;lore=li@el@<&r><&f>Sieht aus wie <&1>Wasser<&f>, brennt wie <&4>Feuer<&f>.|]
    flags:
        flasche: true
    recipes:
        1:
            type: shapeless
            output_quantity: 1
            input: brauen_leereFlasche|brauen_gaerenderAlkohol

        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherReinerAlkohol|brauen_becherReinerAlkohol|brauen_becherReinerAlkohol|brauen_becherReinerAlkohol|brauen_becherReinerAlkohol|brauen_leereFlasche

brauen_becherReinerAlkohol:
    type: item
    material: potion[color=co@white]
    display name: <&f>Reiner Alkohol
    lore:
    - <&f>Ein Glas reiner Alkohol.
    flags:
        glas: true
    recipes:
        umfuellen_reineralkohol:
            recipe_id: umfuellen_reineralkohol
            type: shapeless
            output_quantity: 5
            input: brauen_reinerAlkohol