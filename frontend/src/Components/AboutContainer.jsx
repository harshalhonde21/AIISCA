import { Fragment } from 'react';
import "./AboutContainer.css";

const AboutContainer = () => {
    return (
        <Fragment>
            <div className="about-component-container">
                <h1 className="heading-about-component">
                    WHO WE ARE
                </h1>
                <p className="info-about-component">
                    AIISCA is an autonomous Dalit movement organization founded on 16 July 2023 . We firmly believe in creating an independent cadre-based movement and nurturing leadership at both the grassroots and national levels. Taking into account the unique issues and problems faced by Dalit communities in different states, we are working towards establishing state-level bodies all over India.
                </p>
            </div>

            {/* another div to information about */}

            <div className="about-component-container" style={{backgroundColor:'whitesmoke'}}>
                <p className="info-about-component" style={{color:"black", fontWeight:'bold'}}>
                As an Autonomous Dalit Movement, we are driven by the goal of empowering and uplifting Dalit communities across regions and religions. We strive to challenge the deeply ingrained caste-based discriminations and inequalities that have persistently marginalized Dalits for generations. Our movement stands for the assertion of Dalit identity, dignity, and rights, while fostering unity and solidarity among Dalit individuals and communities.
                </p>
                <h1 className="heading-about-component" style={{color:"#1e31d6"}}>
                    WHAT WE DO
                </h1>
            </div>

        </Fragment>
    )
}

export default AboutContainer
