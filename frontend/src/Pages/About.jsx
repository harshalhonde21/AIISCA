import { Fragment } from "react";
import AboutContainer from "../Components/AboutContainer";
import "../Css/About.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <Fragment>
      <main className="outer-about-main-component">
        {/* main first component start here */}

        <section className="front-page-component">
          <div className="para-with-name-container">
            <p>
              <span>&ldquo;</span>
              What we must do is not to content ourselves with mere political
              democracy. We must make our political democracy a social democracy
              as well. Political democracy cannot last unless there is at the
              base of it, a social democracy.<span>&quot;</span>
            </p>
            <h3>- Dr. Babasaheb Ambedkar</h3>
          </div>
          <div className="image-about-component">
            <img src="/baba.png" alt="loading.." />
          </div>
        </section>

        {/* main first component end here */}

        {/* second page start here */}

        <section className="seconds-page-container">
          <AboutContainer />
        </section>

        {/* second page end here */}

        {/* third page start here */}

        <section className="third-page-container">
          <h1 className="third-focus-component f-after">KEY AREAS OF FOCUS</h1>
          <div className="head-para-combine-component">
            <h4 className="heading-combine"><span>-</span>Grassroots Mobilization</h4>
            <p className="para-combine">
              We firmly believe that change begins at the grassroots level. As
              such, we actively engage in grassroots mobilization efforts,
              collaborating with Dalit communities to identify their unique
              needs and challenges. Through community-led initiatives and
              projects, we empower Dalit individuals with the tools and
              knowledge to advocate for their rights and create a positive
              impact within their communities.
            </p>

            <h4 className="heading-combine"><span>-</span>Advocacy and Awareness</h4>
            <p className="para-combine">
              One of our primary objectives is to raise awareness about the
              systemic challenges faced by Dalits due to caste-based
              discrimination. Through educational campaigns, workshops,
              seminars, and social media outreach, we aim to sensitize the
              public to the enduring impact of casteism. By shedding light on
              these issues, we work towards transforming societal perceptions
              and breaking down discriminatory practices.
            </p>

            <h4 className="heading-combine"><span>-</span>Political Engagement</h4>
            <p className="para-combine">
              To effect lasting change, we recognize the significance of
              political engagement. Our movement advocates for Dalit
              representation in political spheres and works to strengthen the
              political voice of Dalits at local, regional, and national levels.
              We support and endorse leaders who champion Dalit rights and work
              towards inclusive policies and legislation.
            </p>

            <h4 className="heading-combine"><span>-</span>Solidarity and Collaboration</h4>
            <p className="para-combine">
              Unity is the cornerstone of our movement. We actively seek
              alliances with other social justice movements, organizations, and
              individuals that share our vision of equality and justice. By
              fostering collaboration and mutual support, we amplify our
              collective efforts to dismantle caste-based oppression and promote
              a society that values the dignity and humanity of every
              individual.
            </p>

            <h4 className="heading-combine">
            <span>-</span>Cultural Revival and Empowerment
            </h4>
            <p className="para-combine">
              We celebrate Dalit culture and heritage, recognizing the richness
              and diversity it brings to the world. Our movement endeavors to
              promote cultural revival, preserving traditional knowledge, arts,
              and customs. Through cultural events and initiatives, we aim to
              instill pride and self-esteem within Dalit communities and
              challenge stigmatizing stereotypes.
            </p>
          </div>
        </section>

        {/* third page End here */}

        {/* fourth and last page start here */}

        <section className="fourth-page-container">
          <img src="/chakra.svg" alt="" className="image-behind-list" />
          <img src="/chakra2.svg" alt="" className="image-behind-list2" />
          <img src="/chakra3.svg" alt="" className="image-behind-list3" />
          <h1 className="fourth-focus-component">OUR OBJECTIVES</h1>
          <div className="list-of-work">
            <ul>
              <li>To unite all the erstwhile untouchable (Dalit) communities in one Umbrella organisation to fight against the hegemonic exploitative and brahmanical forces.</li>
              <li>To build autonomous social, economical, educational and cultural institutions.</li>
              <li>To promote the idea of Liberty, Equality and Fraternity among all the Dalit communities.</li>
              <li>To cultivate and nourish the culture of Educate, Agitate and Organize among the Dalit communities for social mobility and transformation.</li>
              <li>To provide local as well as national well organized Ambedkarite leadership to the Dalit community.</li>
              <li>To fight for the constitutional Rights and Entitlements, Welfare and Interests of all Dalit communities.</li>
            </ul>
          </div>
        </section>


        {/* fourth and last page start here */}


        <div className="footer-page-container">
          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default About;


// latest commit