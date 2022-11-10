import styled from "styled-components";

type TypeProps = {
  isActive: boolean;
};

export const NavBody = styled.div<TypeProps>`
  width: 100vw;
  height: 60px;
  position: fixed;
  padding: 0 30px;
  z-index: 99;

  nav {
    margin: 0 auto;
    display: flex;
    height: 100%;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.17);
    transition: all 0.3s;

    ${({ isActive }) =>
      isActive
        ? `background-color:rgba(255, 255, 255, 0);`
        : `background-color: #fff;`};

    ul {
      display: flex;
      gap: 40px;
      list-style: none;
      li {
        color: #000;
        padding: 5px 0;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
        font-weight: bold;
        padding: 15px 10px;
        &:hover {
          border-bottom: 2px solid #000;
        }
      }
    }
  }
`;
