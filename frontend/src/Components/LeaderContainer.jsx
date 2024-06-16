import { Fragment } from "react";
import "./LeaderContainer.css";

const leaders = [
  { id: 1, name: "Dr. Rahul Sonpimple", imgSrc: "/leader1.png", position:"(President)" },
  { id: 2, name: "Vishal Sarpe", imgSrc: "/leader2.png", position:"(Vice-President)" },
  { id: 3, name: "Radhika Vemula", imgSrc: "/leader3.png", position:"(General Secretary)" },
  { id: 4, name: "Amarjit Gurto", imgSrc: "/leader4.png", position:"(Joint Secretary)" },
  { id: 5, name: "Abhijit Waghre", imgSrc: "/leader5.png", position:"(Treasurer)" },
  { id: 7, name: "Vikas Kumar Moola", imgSrc: "/leader6.png", position:"(Convener)" },
  { id: 8, name: "Prashant Randive", imgSrc: "/leader7.png", position:"(President)" },
  { id: 9, name: "Rohini Bhadarge", imgSrc: "/leader8.png", position:"(Vice-President)" },
  { id: 10, name: "Deepali Salve", imgSrc: "/leader9.png", position:"(General Secretary)" },
  { id: 11, name: "Shefali Sonune", imgSrc: "/leader10.png", position:"(Joint Secretary)" },
  { id: 12, name: "Piyush Dongre", imgSrc: "/leader11.png", position:"(Treasurer)" },
  { id: 13, name: "Sanjeev Sonpimpre", imgSrc: "/leader12.png", position:"(Convener)" },
  { id: 14, name: "Rohit Kamble", imgSrc: "/leader13.png", position:"(President)" },
  { id: 15, name: "Sankalp Gaikwad", imgSrc: "/leader14.png", position:"(Vice-President)" },
  { id: 16, name: "Kalpesh Yamnere", imgSrc: "/leader15.png", position:"(General Secretary)" },
  { id: 17, name: "Ashwini Jadhav", imgSrc: "/leader16.png", position:"(Joint Secretary)" },
  { id: 17, name: "Ritesh Salve", imgSrc: "/leader17.png", position:"(Treasurer)" },
  { id: 17, name: "Hardika Bhagat", imgSrc: "/leader18.png", position:"(Convener)" },  
];

const LeaderContainer = () => {
  return (
    <Fragment>
      <div className="leader-component">
        <h1 className="leader-heading-component">OUR LEADERSHIP TEAM</h1>
        <div className="main-leader-component">
          {leaders.map((leader) => (
            <div className="card-team-member" key={leader.id}>
              <img src={leader.imgSrc} alt={leader.name} />
              <div className="name-leader">{leader.name}</div>
              <div style={{color:"darkred", fontSize:'1rem', marginBottom:'0.4rem'}} className="name-leader">{leader.position}</div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LeaderContainer;
