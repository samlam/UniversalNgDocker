# README

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE.md)

[TODO](./TODO.md) list

## local dev machine

* npm is v6 or above
* angular cli v 1.7.x

```bash
npm install -g npm@6.0.0 @angular/cli nodemon@1.17.0 browser-sync
```

## debug start

```bash
cd ./web

npm install

npm run build:dev
```

## running the container

```bash
docker-compose up
```

## web browser

navigate to `localhost:8000`

browser-sync ui is running on `http://localhost:3001/`


## server-side live-reload and debugging

The project runs on express. Run these watchers to enable backend live-reload, tho this is some what buggy; be sure to run them in separate terminal

```bash
npm run build:devaot
npm run build:devserver
```

## restart nodemon

to restart nodemon without bringing the compose up/down; first access the container interactively, then send the kill -1 command to the nodemon process by its PID

```bash
docker exec -it {containerid} ash
kill -1 {nodemon#}
```

After container is started, nodemon usually prints its PID; see the sample below the PID is 7, this number changes everytime container is started

```
web    | [nodemon] 1.17.0
web    | [nodemon] reading config ./nodemon.json
web    | [nodemon] to restart at any time, enter `rs`
web    | [nodemon] or send SIGHUP to 7 to restart
web    | [nodemon] ignoring: .git node_modules/**/*
``` 

Sending the `-1` signal to nodemon, which then restarts the child node process

```bash
$ docker exec -it 6e72c ash
/app # ps
PID   USER     TIME   COMMAND
    1 root       0:00 /bin/sh -c nodemon -L ./dist/server.js --watc
    7 root       0:00 node /usr/local/bin/nodemon -L ./dist/server.
    8 root       0:01 node /usr/local/bin/browser-sync start -c bs-
   25 root       0:00 sh -c node --harmony ./dist/server.js --inspe
   26 root       0:01 node --harmony ./dist/server.js --inspect=0.0
   40 root       0:00 ash
   45 root       0:00 ps
/app # kill -1 7
```


---
Please view with [Markdown-Preview-Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/)
