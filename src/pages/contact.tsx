import PagePadding from "../components/Templates/PagePadding";
import React from "react";
import { Image } from "semantic-ui-react";

const contactEmail = "babet-kanis@hotmail.com";

const Page = () => {
  return (
    <PagePadding size="narrow">
      <div className="contact-grid">
        <section>
          <p>
            Onderzoek door middel van documentatie. Het vastleggen van een
            toestand. Eén plaats in één tijd, meerdere plaatsen in meerdere
            tijden. Op basis van ontdekkingen die mijn verstand te boven gaan.
            Het uit context halen van eigenschappen. Gebruik maken van de
            wetenschap. En niet meer laten zien dan nodig, een versimpeling.
          </p>
          <p>
            <i>
              Research through documentation. A capture of a condition. One
              place in one time, multiple places in multiple times. On the basis
              of discoveries that are beyond my understanding. Taking properties
              out of context. Making use of science. And not showing more than
              required, a simplification.
            </i>
          </p>
          <br />
          <p>Babet Kanis</p>
          <a className="btn" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </section>
        <section>
          <Image src="assets/images/Portrait.png" />
        </section>
      </div>
    </PagePadding>
  );
};

export default Page;
