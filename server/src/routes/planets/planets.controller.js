const {getAllPlanets}=require('./../../models/planets.model')
const planets=require('./../../models/planets.mongo')
async function httpgetAllPlanets(req,res){
return res.status(200).json(await getAllPlanets())
}
module.exports={
  httpgetAllPlanets
}