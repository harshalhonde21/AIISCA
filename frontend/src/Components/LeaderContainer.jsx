import { Fragment } from "react";
import "./LeaderContainer.css";

const LeaderContainer = () => {
  return (
    <Fragment>
      <div className="leader-component">
        <h1 className="leader-heading-component">OUR LEADERSHIP TEAM</h1>
        <div className="main-leader-component">
          <div className="card-team-member">
            <img src="/leader1.png" alt="" />
            <div className="name-leader">Dr. Rahul Sonpimple</div>
          </div>
          <div className="card-team-member">
            <img src="/leader2.png" alt="" />
            <div className="name-leader">Vishal Sarpe</div>
          </div>
          <div className="card-team-member">
            <img src="/leader3.png" alt="" />
            <div className="name-leader">Radhika Vemula</div>
          </div>
          <div className="card-team-member">
            <img src="/leader4.png" alt="" />
            <div className="name-leader">Amarjit Gurto</div>
          </div>
          <div className="card-team-member">
            <img src="/leader5.png" alt="" />
            <div className="name-leader">Abhijit Waghre</div>
          </div>
          <div className="card-team-member">
            <img src="/leader6.png" alt="" />
            <div className="name-leader">Vikas Kumar Moola</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeaderContainer;
