import { Fragment } from 'react';
import { HiMiniUsers } from "react-icons/hi2";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import CountUp from 'react-countup';
import "./EventContainer.css";

const NoCounting = () => {
    return (
        <Fragment>
            <div className="counting-container">
                <div className="count-sub-container">
                    <div className="react-icons"><HiMiniUsers /></div>
                    <div className="name-count">Members</div>
                    <div className="count-number">
                        <CountUp start={0} end={200} duration={2.5} separator="," />
                    </div>
                </div>
                <div className="count-sub-container">
                    <div className="react-icons"><MdOutlineInsertPhoto /></div>
                    <div className="name-count">Photo</div>
                    <div className="count-number">
                        <CountUp start={0} end={200} duration={2.5} separator="," />
                    </div>
                </div>
                <div className="count-sub-container">
                    <div className="react-icons"><BsCalendar4Event /></div>
                    <div className="name-count">Event</div>
                    <div className="count-number">
                        <CountUp start={0} end={11} duration={2.5} />+
                    </div>
                </div>
                <div className="count-sub-container">
                    <div className="react-icons"><LiaAwardSolid /></div>
                    <div className="name-count">Awards</div>
                    <div className="count-number">
                        <CountUp start={0} end={1} duration={2.5} />+
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NoCounting;
