import {Fragment} from 'react';
import "./LeaderContainer.css";

const LeaderContainer = () => {
  return (
    <Fragment>
      <div className="leader-component">
        <h1 className="leader-heading-component">
          OUR LEADERSHIP TEAM
        </h1>
        <div className="main-leader-component">
          <div className="card-team-member">
            <img src="/logo.png" alt="" />
            <div className="name-leader">Harshal</div>
          </div>
          <div className="card-team-member">
            <img src="/logo.png" alt="" />
            <div className="name-leader">Harshal</div>
          </div>
          
        </div>
        <button className="leader-button">Read More</button>
      </div>
    </Fragment>
  )
}

export default LeaderContainer
