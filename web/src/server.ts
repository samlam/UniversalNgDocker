import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as util from 'util';


process.on('uncaughtException', function (er:Error) {
  console.error('node - ', er.message, er.stack)
  process.exit(1)
})

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');


function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*.*', (req,res) => {
  res.status(404);
  res.send('Page not found');
});

app.get('*', (req, res) => {
  console.info('express -', req.method, req.url, req.query);
  try{
    res.render('index', { req });
  }catch(err){
    console.error('express -', err.message, err.stack);
  }
});

app.use(function (err, req, res, next) {
  if (err){
    console.error('express - ', err.message);
  }
  if (err instanceof Error) {
    res.status(400)
    return res.send(err.message)
  }
})


app.listen(PORT, () => {
  console.log(`listening .......... on http://localhost:${PORT}!`);
});
