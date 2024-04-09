import { Fragment } from "react";
import Footer from "../Components/Footer";
import "../Css/Demands.css";

const Demands = () => {
  return (
    <Fragment>
      <main className="outer-about-main-component">
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
            <img src="/demandImage.svg" alt="loading.." />
          </div>
        </section>

        <section className="third-page-container">
          <div className="head-para-combine-component">
            <p
              style={{ fontSize: "1.5rem", marginBottom: "6rem", fontFamily:'Poppins' }}
              className="para-combine"
            >
              Babasaheb had a dream to transform India’s political democracy
              into a social democracy. However, after more than seventeen years
              of independence, can India truly be called a democratic nation?
              When we examine the socio-economic situation of downtrodden
              communities, it becomes challenging for any sensible person to
              support the popular statement and over-romanticized idea that
              India is the largest democracy in the world. While the ruling
              caste-class communities have gained complete control over
              so-called modern institutions and the economy, lower-caste
              communities still struggle to secure their basic survival. <br /><br />
              The helpless condition of Scheduled caste – Dalits communities
              across regions and religions is a clear example of the failure of
              the modern Indian state, mainstream political parties, and the new
              free market. According to the Agricultural Census (2015-2016), the
              majority of Dalits are landless, and only 9 percent of Dalits
              operate on agricultural land. Around 80 percent of the 1571.4 lakh
              hectares of agricultural land is owned by upper-caste and other
              dominant caste groups. The Wealth Inequality, Class, and Caste in
              India report for 1961-2012 reveals that the Brahmin community
              alone monopolizes 48 percent of the national income, which is
              above the national average income, while other upper-caste
              communities secure 45 percent. <br /> In contrast, Dalit, Adivasi, and
              OBC together earn only Rs. 113, 22, far less than the national
              household income average. The Socio-Economic and Caste Census 2011
              indicates that only 4 percent of SC and ST families have a member
              in government jobs. The lack of education, customary landlessness,
              poverty, absence of socio-cultural capital, and family networks,
              along with the traditional monopoly of upper-caste on the economy
              and employment, force Dalits to migrate to cities and become cheap
              labor in the urban informal market. <br /> Moreover, the data shows the
              unwillingness of both Central and State governments to improve the
              condition of SC communities. Backlog reserved vacancies in various
              government departments are widespread and have somehow
              institutionalized the exclusion of Dalits from mainstream
              socio-economical life. Union ministries, their departments,
              autonomous bodies, institutes of national importance,
              universities, and affiliated colleges all have backlog reserved
              vacancies. Government data reveals that the number of unfilled
              posts in the Scheduled Castes/Scheduled Tribes reserved category
              in Central ministries has increased substantially over the years. <br />
              Moreover, the economic reform process in India, which began
              formally from 1991 onwards and manifested itself mainly in the
              form of liberalization, privatization, and globalization, has, on
              the whole, resulted in the contraction of the public sector and
              the ascendancy of the private sector. This has begun to dismantle
              the limited protection being granted to the SCs in the sphere of
              employment. The privatization has drastically narrowed down
              Dalits’ access to basic means of sustenance and development, such
              as education, employment, and healthcare facilities. <br />The State’s
              pursuit of privatization of public sector Units (industries and
              institutions) and the entry of MNCs without a proper policy of
              reservation in Private sectors has not only reduced the scope of
              reservation policy but has also rendered lakhs of Dalits and other
              marginalized sections unemployed. At the political front, we have
              witnessed the decline of Scheduled caste-led parties both at
              regional and national levels. The elected representatives of
              mainstream political parties have hardly shown any willingness to
              raise the issues of SC communities in the recent past. Moreover,
              it would not be an exaggeration to say that the existing political
              reservation has almost no effect on the condition of Dalits and
              merely helps ruling caste political parties increase their tally
              in electoral competition. Surprisingly, even in cases of the most
              heinous crimes against Dalits, the elected representatives stand
              in favor of their respective political parties, rather than
              standing with the community. <br /> The silent elected representatives,
              acute poverty among Dalits, complete socio-political impunity to
              oppressor castes, increasing caste atrocities on Dalits,
              government unwillingness towards the upliftment of the community,
              lack of institutional support in securing justice, and no radical
              welfare measures in the open-market economy have pushed Dalits
              into a complete situation of statelessness. In this context, we,
              the All India Independent Scheduled Caste Association (AIISA),
              believe that creating an autonomous movement of Dalits at the
              national level is the need of the hour. We appeal and firmly
              believe in fighting for our human rights.
            </p>
          </div>
        </section>

        <section className="fourth-page-container">
          <img src="/chakra.svg" alt="" className="image-behind-list" />
          <img src="/chakra2.svg" alt="" className="image-behind-list2" />
          <img src="/chakra3.svg" alt="" className="image-behind-list3" />
          <h1 style={{ fontSize: "4rem" }} className="fourth-focus-component">
            Looking at the present situation, we demand:
          </h1>
          <div className="list-of-work">
            <ul>
              <li style={{ listStyle: "inherit" }}>
                Reservation policy should be extended to the private sector,
                both in employment and education
              </li>
              <li style={{ listStyle: "inherit" }}>
                The government should fulfill backlog vacancies immediately.
              </li>
              <li style={{ listStyle: "inherit" }}>
                Enact comprehensive laws on reservations to guarantee population
                proportionate inclusion of the SCs in all government departments
                and institutions.
              </li>
              <li style={{ listStyle: "inherit" }}>
                To protect Dalits from caste atrocities, as Babasaheb Ambedkar
                suggested, the government should build separate settlements for
                Dalits far away from dominant castes, with their own means of
                livelihood, particularly land.
              </li>
              <li style={{ listStyle: "inherit" }}>
                The government should support the Dalit community in building
                its autonomous educational and economic institutions.
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Demands;
