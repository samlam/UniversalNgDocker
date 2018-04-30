FROM node-build-local AS build
WORKDIR /base
# RUN npm install -g npm@latest
# RUN npm install -g nodemon@1.17.0

COPY package.json /base/package.json
RUN npm install

COPY . /base
RUN npm run build

FROM node-build-local AS final
WORKDIR /app
EXPOSE 4200
COPY --from=build /base .

CMD ["node", "dist/server.js"]
