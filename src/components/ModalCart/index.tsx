import {
  ModalBody,
  ModalContent,
  ModalButtonClose,
  ContainerModalButtonClose,
  ModalCartList,
  ContainerFooterModalCart,
  ContainerSubtotalPriceCart,
  ContainerGroupButtonsModalCart,
} from "./style";
import { useContext} from "react";
import { MdClose } from "react-icons/md";
import { ModalCartContext, IModalCart } from "../../context/modalContext";
import { CartContext, ICart } from "../../context/cartContext";
import ItemModalCart from "../ItemModalCart";
import Link from "next/link";

interface IModal {
  modalOpen: boolean;
  totalPrice: number;
}

const ModalCart: React.FC<IModal> = (props) => {
  const { cartItems, setCartItems } = useContext(CartContext) as ICart;
  const { setModalCartOpen } = useContext(ModalCartContext) as IModalCart;

  const removeItem = (id: string) => {
    const filterCartItem = cartItems.filter((item) => {
      return item.id != id;
    });
    setCartItems(filterCartItem);
  };

  const increaseQuantityItem = (id: string) => {
    let indexItem = cartItems.findIndex((item) => item.id == id);
    let items = [...cartItems];
    items[indexItem].quantity += 1;
    setCartItems(items);
  };

  const decreaseQuantityItem = (id: string) => {
    let indexItem = cartItems.findIndex((item) => item.id == id);
    let items = [...cartItems];

    if (items[indexItem].quantity != 1) {
      items[indexItem].quantity -= 1;
      setCartItems(items);
    } else {
      removeItem(id);
    }
  };


  return (
    <>
      <ModalBody isOpen={props.modalOpen}>
        <ModalContent>
          <ContainerModalButtonClose>
            <h3>Cart review</h3>
            <ModalButtonClose onClick={() => setModalCartOpen(false)}>
              <MdClose />
            </ModalButtonClose>
          </ContainerModalButtonClose>
          <ModalCartList>
            {cartItems.map(({ image, name, price, quantity, id }) => {
              return (
                <ItemModalCart
                  decreaseQuantity={() => decreaseQuantityItem(id)}
                  increaseQuantity={() => increaseQuantityItem(id)}
                  removeCartItem={() => removeItem(id)}
                  key={id}
                  image={image}
                  name={name}
                  price={price}
                  quantityValue={quantity}
                />
              );
            })}
          </ModalCartList>
          <ContainerFooterModalCart>
            <ContainerSubtotalPriceCart>
              <span>Subtotal:</span>
              <span>${props.totalPrice}</span>
            </ContainerSubtotalPriceCart>
            <ContainerGroupButtonsModalCart>
              <Link href="/cart">
                <button className="view-cart">View Cart</button>
              </Link>

              <Link href="/checkout">
                <button className="checkout">Checkout</button>
              </Link>
            </ContainerGroupButtonsModalCart>
          </ContainerFooterModalCart>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default ModalCart;
