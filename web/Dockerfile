FROM node:8.11-alpine AS build
WORKDIR /app
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install -g nodemon@1.17.0
RUN npm install -g browser-sync


EXPOSE 4200
EXPOSE 8000
EXPOSE 3001
EXPOSE 8001
EXPOSE 5858

CMD nodemon -L ./dist/server.js --inspect=0.0.0.0:5858 \
    & browser-sync start -c 'bs-config.js'
