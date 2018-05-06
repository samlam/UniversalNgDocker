## debug start

```
cd ./web

npm install

npm run build

cd ..

docker-compose up
```


experimental

```
docker container run --name ung1a --rm -it -v //c/Temp/UniversalNg1a/web:/app -p 8000:4200 -d universalng1a_web
docker exec -it ung1a ash
```