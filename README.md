docker run -d --name athalon_rezepte \
-l traefik.enable=true \
-l traefik.port=3000 \
-l traefik.frontend.rule=Host:rezepte.athalon.de \
--network docker_athalon \
--restart always \
misan/athalon-rezepte
