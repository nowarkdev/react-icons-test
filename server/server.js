import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Icon from '../Icon.react';
const server = express();

server.engine('.hbs', exphbs({ extname: '.hbs', layout: false }));
server.set('view engine', '.hbs');
server.set('views', '.');
server.enable('view cache');

server.use((req, res) => {
    let renderOptions = {}

    console.log("Rendered attempt", Icon);
    renderOptions.html = renderToString(
        <Icon />
    );

    console.log("Rendered successfully", renderOptions.html);
    res.render('index.hbs', renderOptions);
});

export default server;
