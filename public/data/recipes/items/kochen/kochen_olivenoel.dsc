kochen_fruchtansatzOlive:
  type: item
  material: green_dye
  display name: <&6>Fruchtansatz
  lore:
  - <&f>Olive
  mechanisms:
    unbreakable: false
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive|landwirtschaft_olive

kochen_einfachesOlivenoel:
  type: item
  material: potion[custom_model_data=34012]
  display name: <&2><&l>Einfaches Olivenöl
  lore:
  - <&f>[<&6>-<&f>] Heiß gepresst
  - <&f>[<&6>-<&f>] <&e>Für Handwerker
  - <&f>[<&6>-<&f>] 1 Liter
  mechanisms:
    unbreakable: false
  flags:
      glas: true
  recipes:
    1:
        type: shapeless
        output_quantity: 2
        input: kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive|kochen_fruchtansatzOlive

kochen_feinesOlivenoel:
  type: item
  material: potion[custom_model_data=34011]
  display name: <&2><&l>Feines Olivenöl
  lore:
  - <&f>[<&6>-<&f>] Kräftig im Geschmack
  - <&f>[<&6>-<&f>] Vollmundig
  - <&f>[<&6>-<&f>] <&e>Zum Backen und Kochen
  - <&f>[<&6>-<&f>] 1 Liter
  mechanisms:
    unbreakable: false
  flags:
      glas: true
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: kochen_einfachesOlivenoel|kochen_einfachesOlivenoel

kochen_extraFeinesOlivenoel:
  type: item
  material: potion[custom_model_data=34014]
  display name: <&2><&l>Extra feines Olivenöl
  lore:
  - <&f>[<&6>-<&f>] Hell und duftend
  - <&f>[<&6>-<&f>] Besonders fein
  - <&f>[<&6>-<&f>] <&e>Für Salate und Kosmetik
  - <&f>[<&6>-<&f>] 1 Liter
  mechanisms:
    unbreakable: false
  flags:
      glas: true
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: kochen_feinesOlivenoel|kochen_feinesOlivenoel