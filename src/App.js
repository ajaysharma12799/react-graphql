import React, {useState, useEffect} from 'react'
import SpaceMission from './graphql/index'
import './App.css'

const App = () => {
  const [data, setData] = useState([]);

  const loadMission = async () => {
    const spaceMission = await SpaceMission.getSpaceMission(10)
    setData(spaceMission)
  }

  useEffect(() => {
    loadMission();
  }, [])
  console.log(data);
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap mt-5 mb-5">
      {
        data.map((mission, idx) => (
          <div key={idx} className="card rounded-0 m-2" style={{width: "20rem"}}>
            <div className="card-body">
              <h5 className="card-title">{mission.mission_name}</h5>
              <p className="lead fs-6 badge bg-primary rounded-0 w-100 p-2 ">Rocket Name: {mission.rocket.rocket_name}</p>
              <p className="card-text">{mission.launch_site.site_name_long}</p>
              <a 
                href={mission.links.video_link} 
                className="rounded-0 w-100 btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Check Video
              </a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App