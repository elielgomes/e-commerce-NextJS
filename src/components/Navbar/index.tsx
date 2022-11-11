import { useEffect, useState, useContext } from "react";
import { NavBody, Menu, ContainerButtonsMenu } from "./style";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ModalCartContext, IModalCart } from "../../context/modalContext";
import ModalCart from "../ModalCart";

const Navbar: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);

  const { setModalCartOpen, modalCartOpen } = useContext(
    ModalCartContext
  ) as IModalCart;


  useEffect(() => {
    if (typeof window != "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setActiveNavbar(true);
        } else {
          setActiveNavbar(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
    }
  }, []);


  return (
    <>
      <ModalCart modalOpen={modalCartOpen} />
      <NavBody isActive={activeNavbar}>
        <nav>
          <Menu>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </Menu>

          <ContainerButtonsMenu>
            <ul>
              <li>
                <a href="#">
                  <BsSearch />
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setModalCartOpen(true)}>
                  <BsCart2 />
                  <span id="cart-count">0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineUser />
                </a>
              </li>
            </ul>
          </ContainerButtonsMenu>
        </nav>
      </NavBody>
    </>
  );
};

export default Navbar;
