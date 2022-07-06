const express=require('express')
const launchesRouter=express.Router()
const {httpgetAllLaunches, httpAddNewLaunch, httpAbortLaunch}=require('./../launches/launches.controller')
launchesRouter.get('/', httpgetAllLaunches).post('/', httpAddNewLaunch).delete('/:id', httpAbortLaunch)
module.exports=launchesRouter