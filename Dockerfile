FROM node:20.10-bullseye-slim

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package-lock.json package.json /app/

RUN cd /app && pnpm install --frozen-lockfile

COPY . /app

RUN cd /app && pnpm run build:ssr

EXPOSE 4000

CMD ["node", "dist/evdc-mapbox-tests/server/main.js"]
