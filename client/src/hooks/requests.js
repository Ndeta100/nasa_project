const API_URI='http://localhost:8000/v1'
async function httpGetPlanets() {
 const response=await fetch(`${API_URI}/planets`)
 return await response.json()
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response= await fetch(`${API_URI}/launches`)
  const fetchLaunches=await response.json()
  return fetchLaunches.sort((a, b)=>{
    return a.flightNumber-b.flightNumber
  })
  // Load launches, sort by flight number, and return as JSON.
}
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URI}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch(err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URI}/launches/${id}`,{
      method:"delete",
    })
  } catch (error) {
    return {
      ok:false
    }
  }
 
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};