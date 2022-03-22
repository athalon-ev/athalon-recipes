kochen_brot:
  type: item
  material: bread[display=<&r><&6>Brot;custom_model_data=1;lore=li@el@<&r><&e>Ein leckerer Laib Brot|]
  mechanisms:
    unbreakable: false
  display name: <&r><&6>Brot
  recipes:
    1:
        type: furnace
        cook_time: 2s
        output_quantity: 1
        input: kochen_brotteig