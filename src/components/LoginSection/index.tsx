import {
  ContainerLoginSection,
  ContainerSideBanner,
  ContainerLoginForm,
} from "./style";
import FormLogin from "../FormLogin";

const LoginSection = () => {
  return (
    <>
      <ContainerLoginSection>
        <ContainerSideBanner></ContainerSideBanner>
        <ContainerLoginForm>
          <FormLogin />
        </ContainerLoginForm>
      </ContainerLoginSection>
    </>
  );
};

export default LoginSection;
