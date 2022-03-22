#Stahl

schmieden_stahlplatte_klein:
    type: item
    material: iron_ingot
    display name: <&6>Stahlplatte (Klein)
    mechanisms:
        custom_model_data: 70006

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlnugget_klein|schmieden_stahlnugget_klein|schmieden_stahlnugget_klein
            - air|air|air

schmieden_gehartete_stahlplatte_klein:
    type: item
    material: iron_ingot
    display name: <&6>Gehärtete Stahlplatte (Klein)
    mechanisms:
        custom_model_data: 70009

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlplatte_klein|schmieden_stahlplatte_klein|schmieden_stahlplatte_klein
            - air|air|air

schmieden_stahlplatte_mittel:
    type: item
    material: iron_ingot
    display name: <&6>Stahlplatte (Mittel)
    mechanisms:
        custom_model_data: 70005

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlnugget_gross|schmieden_stahlnugget_gross|schmieden_stahlnugget_gross
            - air|air|air

schmieden_gehartete_stahlplatte_mittel:
    type: item
    material: iron_ingot
    display name: <&6>Gehärtete Stahlplatte (Mittel)
    mechanisms:
        custom_model_data: 70008

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlplatte_mittel|schmieden_stahlplatte_mittel|schmieden_stahlplatte_mittel
            - air|air|air

schmieden_stahlplatte_gross:
    type: item
    material: iron_ingot
    display name: <&6>Stahlplatte (Groß)
    mechanisms:
        custom_model_data: 70004

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlbarren|schmieden_stahlbarren|schmieden_stahlbarren
            - air|air|air

schmieden_gehaertete_stahlplatte_gross:
    type: item
    material: iron_ingot
    display name: <&6>Gehärtete Stahlplatte (Groß)
    mechanisms:
        custom_model_data: 70007

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_stahlplatte_gross|schmieden_stahlplatte_gross|schmieden_stahlplatte_gross
            - air|air|air

#Schmiedeeisen

schmieden_schmiedeeisenplatte_klein:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenplatte (Klein)
    mechanisms:
        custom_model_data: 70806

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_eisennugget_klein|schmieden_eisennugget_klein|schmieden_eisennugget_klein
            - air|air|air

schmieden_schmiedeeisenplatte_mittel:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenplatte (Mittel)
    mechanisms:
        custom_model_data: 70805

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_eisennugget_gross|schmieden_eisennugget_gross|schmieden_eisennugget_gross
            - air|air|air

schmieden_schmiedeeisenplatte_gross:
    type: item
    material: iron_ingot
    display name: <&6>Schmiedeeisenplatte (Groß)
    mechanisms:
        custom_model_data: 70804

    recipes:
        1:
            type: shaped
            output_quantity: 1
            input:
            - air|air|air
            - schmieden_eisenbarren|schmieden_eisenbarren|schmieden_eisenbarren
            - air|air|air