

## local dev machine

```
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install -g nodemon@1.17.0
RUN npm install -g browser-sync
```

## debug start

```
cd ./web

npm install

npm run build:dev

cd ..

docker-compose up
```


experimental

```
docker container run --name ung1a --rm -it -v //c/Temp/UniversalNg1a/web:/app -p 8000:4200 -d universalng1a_web
docker exec -it ung1a ash
```
