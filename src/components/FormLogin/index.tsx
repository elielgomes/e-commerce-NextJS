import {
  FormBody,
  Form,
  FormGroup,
  FormControl,
  ContainerButtonSubmit,
} from "./style";
import Link from "next/link";

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
        <p className="redirect-register">
          No account yet? <Link href="/register">REGISTER HERE</Link>
        </p>
      </FormBody>
    </>
  );
};

export default FormLogin;
