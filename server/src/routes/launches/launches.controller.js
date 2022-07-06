const {getAllLaunches,scheduleNewLaunch,existLaunchWithId,abortLaunchById}=require('../../models/launches.model')
const {getPagination}=require('../../services/query')
async function httpgetAllLaunches(req,res){
  const{skip, limit}=getPagination(req.query)
  return res.status(200).json(await getAllLaunches(skip, limit))
}
async function httpAddNewLaunch(req,res){
  let launch=req.body
  if(!launch.mission || !launch.rocket|| !launch.launchDate || !launch.target){
    return res.status(400).json({
      message:'Missing required launch fields'
    })
  }
    launch.launchDate=new Date(launch.launchDate)
    if(isNaN(launch.launchDate)){
      return res.status(400).json({
        message:'Invalid launch date'
      })
    }
    await scheduleNewLaunch(launch)
    return res.status(201).json(launch)
  
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  const existsLaunch = await existLaunchWithId(launchId);
  if (!existsLaunch) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }

  const aborted = await abortLaunchById(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: 'Launch not aborted',
    });
  }

  return res.status(200).json({
    ok: true,
  });
}
module.exports={
  httpgetAllLaunches,httpAddNewLaunch,httpAbortLaunch
}