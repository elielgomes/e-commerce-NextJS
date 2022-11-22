import styled from 'styled-components'

export const ContainerSectionAdmin = styled.div`
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 30px;

  label {
    position: absolute;
    top: -11px;
    left: 20px;
    pointer-events: none;
    z-index: 4;
    background: #fff;
    padding: 0 10px;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: #777777;
  }

  textarea,
  select {
    color: #777777;
    border: 1px solid #cbd3d9;
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
    transition: var(--transitions);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: 0 0 0 30px white inset;
    &:focus {
      border: 1px solid var(--secondary-color);
    }
  }

  select {
    width: 150px;
  }
  textarea {
    width: 440px;
  }
`;

export const FormControl = styled.input`
  height: 60px;
  padding: 0 30px;
  color: #777777;
  border-radius: 6px;
  border: 1px solid #cbd3d9;
  font-size: 14px;
  font-weight: 400;
  background: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  transition: var(--transitions);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-shadow: 0 0 0 30px white inset;

  &:focus {
    border: 1px solid var(--secondary-color);
  }

  &[name="name"] {
    width: 250px;
  }

  &[name="price"],
  &[name="old-price"],
  &[name="stock"] {
    width: 120px;
  }

  &[name="image"] {
    width: 300px;
  }
`;

export const ContainerButtonSubmit = styled.div`
  button {
    background-color: var(--secondary-color);
    width: 100%;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1.7;
    padding: 16px 38px;
    position: relative;
    transition: all var(--transitions);
    color: #fff;
    font-weight: bold;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const BodyImageInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 200px;
  color: #cbd3d9;
  border: 2px dashed;
  position: relative;
`;

export const ImageInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

export const ContainerInputImage = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px 0;
`;
