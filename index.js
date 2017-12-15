"use strict";

const express = require("express");
const app = express();

let data = [
  {
    id: 0,
    device: "Frigo",
    averageConsumption: 300
  },
  {
    id: 1,
    device: "Ordinateur",
    averageConsumption: 100
  },
  {
    id: 2,
    device: "Machine à laver",
    averageConsumption: 3000
  },
  {
    id: 3,
    device: "Sèche linge",
    averageConsumption: 3000
  },
  {
    id: 4,
    device: "TV LCD",
    averageConsumption: 200
  }
];

app.use(express.json());

app.get("/devices", (req, res) => {
  res.send(JSON.stringify(data));
});

app.post("/devices", (req, res) => {
  const newDevice = req.body;
  const lastId = data.reduce((currentLastId, device) => {
    return currentLastId > device.id ? currentLastId : device.id;
  }, 0);

  newDevice.id = lastId + 1;
  data.push(newDevice);

  res.send(JSON.stringify(newDevice));
});

app.put("/devices/:id", (req, res) => {
  const index = data.findIndex(c => c.id === +req.params.id);
  if (index === -1) return res.sendStatus(400);
  const updatedDevice = req.body;
  updatedDevice.id = +updatedDevice.id;
  data[index] = updatedDevice;
  res.send(JSON.stringify(updatedDevice));
});

app.delete("/devices/:id", (req, res) => {
  const lengthBefore = data.length;
  data = data.filter(d => d.id !== +req.params.id);
  return data.length !== lengthBefore
    ? res.status(200).send({})
    : res.status(400).send({});
});

app.use(express.static("."));
console.log("Listen on port 3000");
app.listen(3000);
