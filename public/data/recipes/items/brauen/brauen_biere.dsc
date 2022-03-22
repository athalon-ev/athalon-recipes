brauen_kristallweizen:
    type: item
    material: potion[color=co@181,170,146]
    display name: <&6>Kristallweizen
    lore:
    - <&f>Ein erfrischender, klarer Genuss.
    flags:
        flasche: true
    recipes:
        abfuellen:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerendesKristallweizen|brauen_leereFlasche
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_krugKristallweizen|brauen_krugKristallweizen|brauen_leereFlasche

brauen_malzbier:
    type: item
    material: potion[color=co@162,122,26]
    display name: <&6>Malzbier
    lore:
    - <&f>Malzig und prickelnd!
    flags:
        flasche: true
    recipes:
        abfuellen:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerendesMalzbier|brauen_leereFlasche
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_krugMalzbier|brauen_krugMalzbier|brauen_leereFlasche

brauen_dunkelbier:
    type: item
    material: potion[color=co@110,108,104]
    display name: <&r><&6>Dunkelbier
    lore:
    - <&f>Dunkel und voll im Geschmack!
    flags:
        flasche: true
    recipes:
        abfuellen:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerendesDunkelbier|brauen_leereFlasche
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_krugDunkelbier|brauen_krugDunkelbier|brauen_leereFlasche

brauen_helles:
    type: item
    material: potion[color=co@181,170,146]
    display name: <&r><&6>Helles Bühlmarker
    lore:
    - <&f>Leicht und erfrischend!
    flags:
        flasche: true
    recipes:
        abfuellen:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerendesHelles|brauen_leereFlasche
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_krugHelles|brauen_krugHelles|brauen_leereFlasche