import styled from "styled-components";

export const ContainerCartSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 100px 0;
`;

export const ContainerTable = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3577f0;
    border-radius: 20px;
  }
`;

export const TableCartProduct = styled.table`
  width: 800px;

  border-collapse: collapse;
  span {
    font-size: 20px;
  }
`;

export const TableHead = styled.thead`
  background-color: #F0F2FF;

  tr > th {
    padding: 20px 15px;
  }
`;

export const BodyListCartSection = styled.tbody`

  tr > td {
    padding: 20px 15px;
  }
`;

export const BodyPurchaseSummary = styled.div`
  width: 800px;
  height: 240px;
  background-color: #F0F2FF;
  padding: 30px 40px;
`;

export const PurchaseSummary = styled.ul``;

export const PurchaseSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: bold;
`;

export const PurchaseShipping = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  span {
    font-size: 16px;
    font-weight: bold;
  }

  form.container-shipping {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const PurchaseTotal = styled.div`
  border-top: 1px solid black;
  padding-top: 20px ;
  display: flex;
  justify-content: space-between;
  span{
    font-size: 20px;
    font-weight: bold;
  }
`;
