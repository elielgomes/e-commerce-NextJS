import {
  ContainerContactSection,
  ContainerAddress,
  BodyAddress,
  OurStore,
  OpeningHours
} from "./style";
import FormContact from "../FormContact";
import MapLocation from "../MapLocation";

const ContactSection = () => {
  return (
    <>
      <ContainerContactSection>
        <ContainerAddress>
          <FormContact />

          <BodyAddress>
            <OurStore>
              <h3>Our Store</h3>
              <p>Street adasdadadadadad, <br/> Dev 1231, Devlandia of Space</p>
              <p>Phone: +00 1234-5678</p>
              <p>Email: hello@hotmail.com</p>
            </OurStore>
            <OpeningHours>
              <h3>Opening Hours</h3>
              <p>Monday to Saturday: 9am - 10pm</p>
              <p>Sundays: 10am - 6pm</p>
            </OpeningHours>
          </BodyAddress>
        </ContainerAddress>

        <MapLocation />
      </ContainerContactSection>
    </>
  );
};
export default ContactSection;
