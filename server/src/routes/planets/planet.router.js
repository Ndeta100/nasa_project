const express=require('express')
const planetRouter=express.Router()
const {httpgetAllPlanets}=require('../planets/planets.controller')
planetRouter.get('/', httpgetAllPlanets)
module.exports=planetRouter