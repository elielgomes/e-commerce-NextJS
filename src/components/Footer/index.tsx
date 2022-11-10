import {
  FooterBody,
  ContainerFooter,
  ContainerInfo,
  CopyrightArea,
  ContainerContact,
  ContainerAccount,
  ContainerPolicy,
  SocialNetworks,
  Copyright,
  PaymentMethod,
} from "./style";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <FooterBody>
        <ContainerFooter>
          <ContainerInfo>
            <ContainerContact>
              <h3>Contact</h3>
              <p>
                <a href="#">Av aasddasdasasdadas, 123 - Developer City - Dev</a>
              </p>
              <ul>
                <li>
                  <a href="mailto:example@example.com">example@example.com</a>
                </li>
                <li>
                  <a href="#">(00) 00000-0000</a>
                </li>
              </ul>
            </ContainerContact>

            <ContainerAccount>
              <h3>Account</h3>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Login / Register</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
              </ul>
            </ContainerAccount>
            <ContainerPolicy>
              <h3>Policy</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
              </ul>
            </ContainerPolicy>
          </ContainerInfo>

          <CopyrightArea>
            <SocialNetworks>
              <ul>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
            </SocialNetworks>
            <Copyright>
              <span>© 2022. All rights reserved by YOURCOMPANY.</span>
            </Copyright>
            <PaymentMethod>
              <ul>
                <li>
                  <img src="/assets/icons/paypal.png" alt="Paypal" />
                </li>
                <li>
                  <img src="/assets/icons/mastercard.png" alt="MasterCard" />
                </li>
                <li>
                  <img src="/assets/icons/visa.png" alt="Visa" />
                </li>
              </ul>
            </PaymentMethod>
          </CopyrightArea>
        </ContainerFooter>
      </FooterBody>
    </>
  );
};

export default Footer;
