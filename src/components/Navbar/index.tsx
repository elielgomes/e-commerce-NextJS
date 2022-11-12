import { useEffect, useState, useContext } from "react";
import {
  NavBody,
  Menu,
  ContainerButtonsMenu,
  MyAccountItem,
  UserDropDown,
} from "./style";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ModalCartContext, IModalCart } from "../../context/modalContext";
import ModalCart from "../ModalCart";
import { CartContext, ICart } from "../../context/cartContext";

const Navbar: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);

  const { cartItems } = useContext(CartContext) as ICart;

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

  useEffect(() => {
    let count: number = 0;

    cartItems.map((item) => {
      count += item.quantity;
    });
    setCartTotalAmount(count);
  }, [cartItems]);

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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </Menu>

          <ContainerButtonsMenu>
            <ul>
              <li>
                <a href="#" onClick={() => {}}>
                  <BsSearch />
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setModalCartOpen(true)}>
                  <BsCart2 />
                  <span id="cart-count">{cartTotalAmount}</span>
                </a>
              </li>
              <li className="my-account-item">
                <MyAccountItem
                  isDropDownActive={dropDownOpen}
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                >
                  <AiOutlineUser />
                </MyAccountItem>
                <UserDropDown isDropDownActive={dropDownOpen}>
                  <ul className="dropdown-list">
                    <li>My Account</li>
                    <li>Support</li>
                  </ul>

                  <button className="dropdown-button-login">Login</button>
                  <p>
                    No account yet? <span>REGISTER HERE</span>
                  </p>
                </UserDropDown>
              </li>
            </ul>
          </ContainerButtonsMenu>
        </nav>
      </NavBody>
    </>
  );
};

export default Navbar;
