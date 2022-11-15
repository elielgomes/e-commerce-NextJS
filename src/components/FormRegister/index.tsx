import {
  FormBody,
  Form,
  FormGroup,
  FormControl,
  ContainerButtonSubmit,
  AlreadyMember,
} from "./style";
import Link from "next/link";

const FormRegister = () => {
  return (
    <>
      <FormBody>
        <h3>I'm New Here</h3>
        <p>Enter your detail below</p>
        <Form>
          <FormGroup>
            <label>User Name</label>
            <FormControl type="text" name="username" placeholder="your name" />
          </FormGroup>
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
          <FormGroup>
            <label>Confirm Password</label>
            <FormControl
              type="password"
              name="password"
              placeholder="
              Repeat your password"
            />
          </FormGroup>
          <ContainerButtonSubmit>
            <button>Create Account</button>
          </ContainerButtonSubmit>
        </Form>
        <AlreadyMember>
          Already a member? <Link href="/login">Sign In</Link>
        </AlreadyMember>
      </FormBody>
    </>
  );
};

export default FormRegister;
