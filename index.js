const express = require('express')
const { getVillains, slugger, addNewVillain } = require('./controller/villains.js')
const app = express()

app.get('/villains', getVillains)
app.get('/villains/:slug', slugger)
app.post('/villains', express.json(), addNewVillain)
app.listen(2020, () => {
  console.log('hi')
})
