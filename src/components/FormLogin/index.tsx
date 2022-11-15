import {
  FormBody,
  Form,
  FormGroup,
  FormControl,
  ContainerButtonSubmit,
} from "./style";

const FormLogin = () => {
  return (
    <>
      <FormBody>
        <h3>Sign in</h3>
        <p>Enter your detail below</p>
        <Form>
          <FormGroup>
            <label>Email</label>
            <FormControl
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <FormControl
              type="password"
              name="password"
              placeholder="At least 8 characters"
            />
          </FormGroup>
          <ContainerButtonSubmit>
            <button>Login</button>
          </ContainerButtonSubmit>
        </Form>
      </FormBody>
    </>
  );
};

export default FormLogin;
