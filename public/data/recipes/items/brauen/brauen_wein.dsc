brauen_apfelwein:
    type: item
    material: potion
    display name: <&6>Apfelwein
    mechanisms:
        custom_model_data: 40033
    lore:
    - <&f>Ein erfrischender Wein aus <&4>Äpfeln<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherApfelwein|brauen_becherApfelwein|brauen_becherApfelwein|brauen_becherApfelwein|brauen_becherApfelwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzApfel2|brauen_leereFlasche

brauen_wolfshalmer_apfeltraum:
    type: item
    material: potion
    display name: <&6>Wolfshalmer Apfeltraum
    mechanisms:
        custom_model_data: 40032
    lore:
    - <&f>Ein erfrischender, herber <&6>Apfelwein
    - <&f>mit einer angenehmen Säure.
    - <&f>Eine Spezialität aus der Stadt
    - <&f><&6>Wolfshalm<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherwolfshalmerApfeltraum|brauen_becherwolfshalmerApfeltraum|brauen_becherwolfshalmerApfeltraum|brauen_becherwolfshalmerApfeltraum|brauen_becherwolfshalmerApfeltraum|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzWolfshalmerApfel2|brauen_leereFlasche

brauen_prioreisTraubenwein:
    type: item
    material: potion
    display name: <&6>Prioreiswein
    lore:
    - <&f>Dieser edle Tropfen weist eine
    - <&c>hellrote Färbung<&f> auf, die das
    - <&e>Sonnenlicht<&f> funkelnd bricht.
    - <&f>Ein feiner Gaumen mag die <&9>reichen
    - <&9>Mineralien<&f> der Tropen schmecken,
    - <&f>schließlich ist dies der erste
    - <&f>Wein aus der <&6>Neuen Welt<&f>.
    - <&f>Doch auch jedem Laien der Kunst
    - <&f>der Weinkunde sollte die <&d>fruchtige
    - <&d>Süße<&f> eine Freude für den Gaumen bereiten.
    mechanisms:
        custom_model_data: 40002
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherPrioreistraubenwein|brauen_becherPrioreistraubenwein|brauen_becherPrioreistraubenwein|brauen_becherPrioreistraubenwein|brauen_becherPrioreistraubenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzPrioreisTraube2|brauen_leereFlasche

brauen_prioreisTraubenweinEis:
    type: item
    material: potion
    display name: <&b>Prioreiswein
    lore:
    - <&f>Dieser edle Tropfen weist eine
    - <&e>klare und weiße Färbung<&f> auf, die das
    - <&f>das <&6>Sonnenlicht<&f> funkelnd bricht.
    - <&f>
    - <&f>Ein feiner Gaumen mag die <&9>reichen
    - <&9>Mineralien<&f> der Tropen schmecken,
    - <&f>schließlich ist dies der erste
    - <&f>Wein aus der <&6>Neuen Welt<&f>.
    - <&f>
    - <&f>Doch auch jedem Laien der Kunst
    - <&f>der Weinkunde sollte die leicht dickflüsstige
    - <&d>fruchtige Natursüße<&f> eine Freude für den
    - <&f>Gaumen bereiten.
    mechanisms:
        custom_model_data: 40002
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherPrioreistraubenweinEis|brauen_becherPrioreistraubenweinEis|brauen_becherPrioreistraubenweinEis|brauen_becherPrioreistraubenweinEis|brauen_becherPrioreistraubenweinEis|brauen_leereFlasche

brauen_traubenwein:
    type: item
    material: potion
    display name: <&5>Wein
    mechanisms:
        custom_model_data: 40003
    lore:
    - <&f>Ein erfrischender Wein aus <&5>Trauben<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_bechertraubenwein|brauen_bechertraubenwein|brauen_bechertraubenwein|brauen_bechertraubenwein|brauen_bechertraubenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzTraube2|brauen_leereFlasche

brauen_birnenwein:
    type: item
    material: potion[color=co@188,222,17]
    display name: <&a>Birnenwein
    lore:
    - <&f>Ein erfrischender Wein aus <&a>Birnen<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherBirnenwein|brauen_becherBirnenwein|brauen_becherBirnenwein|brauen_becherBirnenwein|brauen_becherBirnenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzBirne2|brauen_leereFlasche

brauen_orangenwein:
    type: item
    material: potion[color=co@255,94,0]
    display name: <&6>Orangenwein
    lore:
    - <&f>Ein erfrischender Wein aus <&6>Orangen<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherOrangenwein|brauen_becherOrangenwein|brauen_becherOrangenwein|brauen_becherOrangenwein|brauen_becherOrangenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzOrange2|brauen_leereFlasche

brauen_kirschenwein:
    type: item
    material: potion[color=co@red]
    display name: <&c>Kirschwein
    lore:
    - <&f>Ein erfrischender Wein aus <&c>Kirschen<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherKirschenwein|brauen_becherKirschenwein|brauen_becherKirschenwein|brauen_becherKirschenwein|brauen_becherKirschenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzKirsche2|brauen_leereFlasche

brauen_pflaumenwein:
    type: item
    material: potion[color=co@143,69,133]
    display name: <&c>Pflaumenwein
    lore:
    - <&f>Ein erfrischender Wein aus <&5>Pflaumen<&f>.
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherPflaumenwein|brauen_becherPflaumenwein|brauen_becherPflaumenwein|brauen_becherPflaumenwein|brauen_becherPflaumenwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderFruchtansatzPflaume2|brauen_leereFlasche

brauen_honigwein:
    type: item
    material: potion
    display name: <yellow>Honigwein
    lore:
    - <&f>Ein süßes, <yellow>goldgelbes <&f>Getränk,
    - <&f>welches klar in der Sonne schimmert.
    mechanisms:
        custom_model_data: 40005
    flags:
        flasche: true
    recipes:
        zurueck:
            type: shapeless
            output_quantity: 1
            input: brauen_becherHonigwein|brauen_becherHonigwein|brauen_becherHonigwein|brauen_becherHonigwein|brauen_becherHonigwein|brauen_leereFlasche
        ausFass:
            type: shapeless
            output_quantity: 1
            input: brauen_gaerenderHonigwein|brauen_leereFlasche