const path = require('path')
const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT || 3000 // on server || locally

const app = express()

// Define paths for Express config
const publicDierectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup static directory to serve
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

