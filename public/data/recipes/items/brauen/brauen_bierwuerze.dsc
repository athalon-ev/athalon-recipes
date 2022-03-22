brauen_bierwuerze:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  recipes:
    1:
        type: furnace
        cook_time: 2s
        output_quantity: 1
        input: landwirtschaft_schrot

brauen_bierwuerzeHopfen:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  - <&f>Weitere Zutaten
  - <&f>Hopfen
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: brauen_bierwuerze|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen

brauen_bierwuerzeHalberHopfen:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  - <&f>Weitere Zutaten
  - <&f>Hälfte Hopfen
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: brauen_bierwuerze|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen|landwirtschaft_hopfen

brauen_bierwuerzeHopfenMalz:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  - <&f>Weitere Zutaten
  - <&f>Hopfen
  - <&f>Malz
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: brauen_bierwuerzeHopfen|landwirtschaft_malz

brauen_bierwuerzeHopfenMalzMalz:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  - <&f>Weitere Zutaten
  - <&f>Hopfen
  - <&f>Malz
  - <&f>Malz
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: brauen_bierwuerzeHopfenMalz|landwirtschaft_malz

brauen_bierwuerzeHopfenMalzTanne:
  type: item
  material: brown_dye
  mechanisms:
    unbreakable: false
  display name: <&r><&9>Bierwürze
  lore:
  - <&f>Diese aromatische Substanz kündet
  - <&f>von <&6>ungeahnten Möglichkeiten!
  - <&f>Weitere Zutaten
  - <&f>Hopfen
  - <&f>Malz
  - <&f>Tannennadel
  recipes:
    1:
        type: shapeless
        output_quantity: 1
        input: brauen_bierwuerzeHopfenMalz|landwirtschaft_tannennadel