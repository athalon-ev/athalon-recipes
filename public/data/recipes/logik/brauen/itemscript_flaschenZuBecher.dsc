itemscript_flaschenZuBecher:
    type: World
    events:
        on player crafts item:
        - if <context.recipe_id.contains_text[umfuellen]> :
            - give brauen_leereFlasche <context.amount>