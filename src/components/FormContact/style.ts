import styled from "styled-components";

export const FormBody = styled.div`
  background-color: #fff;
  width: 768px;
  height: auto;
  border-radius: 6px;
  display: flex;
  padding-top: 15px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  h3 {
    font-size: 20px;
    padding: 10px 20px;
    text-align: center;
  }
  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  padding: 30px;
  width: 100%;
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
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const TextArea = styled.textarea`
  min-height: 160px;
  border: 0 none;
  border-radius: 6px;
  resize: none;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  line-height: 1.5;
  padding-left: 30px;
  padding-top: 20px;
  border: 1px solid #cbd3d9;
  outline: none;

  transition: var(--transitions);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid var(--secondary-color);
  }
`;

export const ContainerInputInfoUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
  width: 100%;

`;
