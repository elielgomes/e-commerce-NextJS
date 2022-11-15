import {
  FormGroup,
  FormControl,
  ContainerButtonSubmit,
  Form,
  FormBody,
  TextArea,
  ContainerInputInfoUser,
} from "./style";
const FormContact = () => {
  return (
    <>
      <FormBody>
        <h3>We would love to hear from you.</h3>
        
        <Form>
          <ContainerInputInfoUser>
            <FormGroup>
              <label>
                Name <span>*</span>
              </label>
              <FormControl type="text" name="name" placeholder="Your name" />
            </FormGroup>
            <FormGroup>
              <label>
                Phone <span>*</span>
              </label>
              <FormControl
                type="text"
                name="phone"
                placeholder="(00) 0000-0000"
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email <span>*</span>
              </label>
              <FormControl
                type="email"
                name="email"
                placeholder="example@example.com"
              />
            </FormGroup>
          </ContainerInputInfoUser>

          <FormGroup>
            <label>
              Message <span>*</span>
            </label>
            <TextArea
              cols={1}
              rows={2}
              name="email"
              placeholder="example@example.com"
            />
          </FormGroup>
          <ContainerButtonSubmit>
            <button type="submit">Send Message</button>
          </ContainerButtonSubmit>
        </Form>
      </FormBody>
    </>
  );
};

export default FormContact;
