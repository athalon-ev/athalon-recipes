# Install all node_modules and build the project
FROM node:16-alpine
WORKDIR /app

COPY package.json package-lock.json ./
COPY db db
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

# If possible, run your container using `docker run --init`
# Otherwise, you can use `tini`:
# RUN apk add --no-cache tini
# ENTRYPOINT ["/sbin/tini", "--"]

CMD ["./node_modules/.bin/blitz", "start"]
