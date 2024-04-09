import { Fragment } from "react";
import Footer from "../Components/Footer"
import "../Css/Manifesto.css";

const Manifesto = () => {
  return (
    <Fragment>
      <main>
        <section className="manifesto-page-component">
          <div className="manifesto-with-name-container">
            <p style={{ textAlign: "center" }}>
              <span>&ldquo;</span>
              Working Towards Justice, Equality, and Empowerment for Dalits
              <span>&quot;</span>
            </p>
            <button className="manifesto-btn">
              JOIN US IN OUR QUEST FOR A BETTER FUTURE{" "}
            </button>
          </div>
          <div className="image-manifesto-component">
            <img src="/manifesto.png" alt="loading.." />
          </div>
        </section>

        <section className="third-page-container">
          <h1 className="third-focus-component">PREAMBLE</h1>
          <div className="head-para-combine-component">
            <p style={{ fontSize: '1.5rem', marginBottom: '6rem' }} className="para-combine">
              We, the members of the All India Independent Scheduled Caste Association  (AIISCA), stand united in our commitment to uphold the ideals of social  justice, equality, and empowerment for Dalits across the nation.  Recognizing the challenges faced by our community, we aim to build a  strong and autonomous movement that advocates for the rights and  well-being of Dalits in all spheres of life. With the legacy of Dr. B.R.  Ambedkar as our guiding light, we pledge to work tirelessly towards  transforming the current socio-economic landscape into one that reflects  true democracy and inclusivity.
            </p>
          </div>
          <div className="head-para-combine-component">
            <h4 className="heading-combine">Reservation in Private Sector and Government Institutions</h4>
            <p className="para-combine">
              We demand the extension of the reservation policy to the  private sector in both employment and educational institutions. This  will provide opportunities for Dalits to thrive and succeed in all  sectors of the economy.<br />

              We  call for the immediate fulfillment of all backlog vacancies in  government departments and institutions, ensuring that the benefits of  reservations reach all eligible Dalit candidates.<br />

              We  advocate for the enactment of comprehensive laws on reservations that  guarantee population proportionate inclusion of Dalits in all government  bodies, educational institutions, and public services.<br />
            </p>

            <h4 className="heading-combine">Socio-Economic Upliftment</h4>
            <p className="para-combine">
              To combat the prevailing caste-based discrimination and  atrocities faced by Dalits, we propose the establishment of separate  settlements for Dalits, away from dominant castes, where they can have  access to basic amenities and means of livelihood, particularly land.<br />
              We  urge the government to provide financial and institutional support to  enable the establishment of autonomous educational and economic  institutions for Dalits. These institutions will promote skill  development, entrepreneurship, and self-reliance within our community.
            </p>

            <h4 className="heading-combine">Caste Atrocity Prevention and Justice</h4>
            <p className="para-combine">
              To protect Dalits from caste-based atrocities, we demand the  implementation of stringent laws and the establishment of fast-track  courts for the timely dispensation of justice.<br />
              We  call for the formation of special investigation teams to ensure proper  and unbiased handling of cases related to caste violence and  discrimination.
            </p>

            <h4 className="heading-combine">Political Representation and Accountability</h4>
            <p className="para-combine">
              We emphasize the need to support and strengthen Dalit-led  political parties at both regional and national levels. Their presence  and influence are vital in voicing the concerns and interests of Dalits  effectively.<br />

              We  demand that elected representatives prioritize the welfare of the Dalit  community and actively work towards addressing their issues, rather  than being influenced solely by party politics.
            </p>

            <h4 className="heading-combine">
              Education and Awareness
            </h4>
            <p className="para-combine">
              We urge the government to implement inclusive curricula that highlight  the contributions of Dalit leaders and promote awareness about  caste-based discrimination in educational institutions. We call for targeted programs and initiatives to promote education among  Dalit children, ensuring their access to quality education and equal  opportunities.
            </p>
          </div>
        </section>

        <section className="fourth-page-container">
          <img src="/chakra.svg" alt="" className="image-behind-list" />
          <img src="/chakra2.svg" alt="" className="image-behind-list2" />
          <img src="/chakra3.svg" alt="" className="image-behind-list3" />
          <h1 className="fourth-focus-component">CONCLUSION</h1>
          <div className="list-of-work">
            <ul>
              <li>We, the All India Independent Scheduled Caste Association (AIISA), stand united in our resolve to bring about meaningful change for the upliftment and empowerment of Dalits. By advocating for reservation in the private sector, socio-economic upliftment, justice for caste atrocities, and political representation, we strive to transform India into a society that embraces diversity, respects human rights, and ensures social justice for all its citizens. Together, we shall build a future where every Dalit can lead a life of dignity, equality, and opportunity, just as envisioned by the great leader, Dr. B.R. Ambedkar.</li>
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </Fragment>
  );
};

export default Manifesto;
