'use strict';

const axios = require("axios");
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/buscadestino', (req, res) => {
    let reqData =  req.body;
    let url = "http://gaia.inegi.org.mx/sakbe_v3.1/buscadestino?key=rZMkTZuI-ugbU-t1Y5-zCHg-0ZOETYT3r0HG";
    url += "&num=5&type=json";
    url += "&proj=" + reqData.proj;
    url += "&buscar=" + reqData.buscar;
    axios.post(url)
    .then(response => {
        return res.send(response.data.data);
    })
    .catch( error => {
        return res.send({error:error});
    });
});

app.post('/cuota', (req, res) => {
    let reqData =  req.body;
    let url = "http://gaia.inegi.org.mx/sakbe_v3.1/cuota?key=rZMkTZuI-ugbU-t1Y5-zCHg-0ZOETYT3r0HG&v=1";
    url += "&type=json&proj=" + reqData.proj;
    url += "&dest_i=" + reqData.startTrip;
    url += "&dest_f=" + reqData.endTrip;
    axios.post(url)
    .then(response => {
        console.log(response);
        return res.send(response.data.data);
    })
    .catch( error => {
        return res.send({error:error});
    });
});

app.post('/combustible', (req, res) => {
    let reqData =  req.body;
    let url = "http://gaia.inegi.org.mx/sakbe_v3.1/combustible?key=rZMkTZuI-ugbU-t1Y5-zCHg-0ZOETYT3r0HG";
    url += "&type=json&proj=" + reqData.proj;
    axios.post(url)
    .then(response => {
        console.log(response);
        return res.send(response.data.data);
    })
    .catch( error => {
        return res.send({error:error});
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))