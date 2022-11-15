import { useEffect, useState, useContext } from "react";
import {
  NavBody,
  Menu,
  ContainerButtonsMenu,
  MyAccountItem,
  UserDropDown,
  DropDownList,
  ButtonsMenuItems,
  ListButtonsMenu,
} from "./style";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ModalCartContext, IModalCart } from "../../context/modalContext";
import ModalCart from "../ModalCart";
import { CartContext, ICart } from "../../context/cartContext";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
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
    localStorage.setItem("cart", JSON.stringify(cartItems));
    let totalPrice: number = 0;
    let count: number = 0;

    cartItems.map((item) => {
      totalPrice += item.quantity * item.price;
      count += item.quantity;
    });

    setTotalPrice(totalPrice);
    setCartTotalAmount(count);
  }, [cartItems]);

  return (
    <>
      <ModalCart modalOpen={modalCartOpen} totalPrice={totalPrice} />
      <NavBody isActive={activeNavbar}>
        <nav>
          <Menu>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </Menu>

          <ContainerButtonsMenu>
            <ListButtonsMenu>
              <ButtonsMenuItems onClick={() => {}}>
                <BsSearch />
              </ButtonsMenuItems>
              <ButtonsMenuItems onClick={() => setModalCartOpen(true)}>
                <BsCart2 />
                <span id="cart-count">{cartTotalAmount}</span>
              </ButtonsMenuItems>

              <MyAccountItem
                isDropDownActive={dropDownOpen}
                onClick={() => setDropDownOpen(!dropDownOpen)}
              >
                <AiOutlineUser />
              </MyAccountItem>

              <UserDropDown isDropDownActive={dropDownOpen}>
                <DropDownList>
                  <li>
                    <Link href="/">My Account</Link>
                  </li>
                  <li>
                    <Link href="/">Support</Link>
                  </li>
                </DropDownList>

                <Link href="/login" className="dropdown-button-login">
                  <button>Login</button>
                </Link>
                <p>
                  No account yet? <Link href='/register'>REGISTER HERE</Link>
                </p>
              </UserDropDown>
            </ListButtonsMenu>
          </ContainerButtonsMenu>
        </nav>
      </NavBody>
    </>
  );
};

export default Navbar;
