import {
  ContainerRegisterSection,
  ContainerSideBanner,
  ContainerRegisterForm,
} from "./style";
import FormRegister from "../FormRegister";

const RegisterSection = () => {
  return (
    <>
      <ContainerRegisterSection>
        <ContainerSideBanner></ContainerSideBanner>
        <ContainerRegisterForm>
          <FormRegister />
        </ContainerRegisterForm>
      </ContainerRegisterSection>
    </>
  );
};

export default RegisterSection;
