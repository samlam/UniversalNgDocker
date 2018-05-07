

## local dev machine

```
npm install -g npm@latest @angular/cli nodemon@1.17.0 browser-sync
```

## debug start

```
cd ./web

npm install

npm run build:dev
```

## running the container

```
docker-compose up
```

## web browser

navigate to `localhost:8000`

browser-sync ui is running on `http://localhost:3001/`


experimental

```
docker container run --name ung1a --rm -it -v //c/Temp/UniversalNg1a/web:/app -p 8000:4200 -d universalng1a_web
docker exec -it ung1a ash
```
