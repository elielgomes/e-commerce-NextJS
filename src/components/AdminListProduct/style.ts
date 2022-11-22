import styled from "styled-components";

export const ContainerAdminList = styled.div`
  padding: 100px 20px;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1500px;
`;

export const ContainerSearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  input {
    padding: 5px 10px;
    font-size: 18px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #ddd;
  }
  select {
    border: 1px solid #ddd;
    border-radius: 10px;
    outline: none;
    padding: 0 5px;
    cursor: pointer;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 5px 15px;
    svg {
      padding-top: 2px;
    }
  }
`;

export const AdminList = styled.ul``;
