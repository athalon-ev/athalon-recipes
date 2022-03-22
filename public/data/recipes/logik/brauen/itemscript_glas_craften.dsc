itemscript_honig_umfuellen:
    type: world
    events:
        after player crafts item:
        - if <context.item.has_flag[glas_craft]>:
            - take material:glass_bottle