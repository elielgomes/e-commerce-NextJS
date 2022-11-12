import styled from "styled-components";

export const ContainerCartSection = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TableCartProduct = styled.table`
  width: 900px;

  border-collapse: collapse;

  span {
    font-size: 20px;
  }
`;

export const TableHead = styled.thead`
  background-color: #f6f7fb;

  tr > th {
    padding: 20px 15px;
  }
`;

export const BodyListCartSection = styled.tbody`
  tr > td {
    padding: 20px 15px;
  }
`;
