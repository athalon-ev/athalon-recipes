itemscript_glaeserTrinken:
    type: world
    events:
        after player consumes item:
        - if <context.item.has_flag[glas]>:
            - take material:glass_bottle
        - if <context.item.has_flag[flasche]>:
            - take material:glass_bottle
            - give brauen_leereFlasche