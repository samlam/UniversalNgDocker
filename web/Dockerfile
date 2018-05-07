FROM node:8.11-alpine AS build
WORKDIR /app
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install -g nodemon@1.17.0
RUN npm install -g browser-sync

# COPY package.json /base/package.json
# RUN npm install

RUN ls -la
# COPY . /base
# RUN npm run build

# FROM node-build-local AS final
# WORKDIR /app
EXPOSE 4200
EXPOSE 8000
EXPOSE 3001
EXPOSE 8001
# COPY --from=build /base .

# CMD ["node", "dist/server.js"]

# ENTRYPOINT ["tail", "-f", "/dev/null"]
