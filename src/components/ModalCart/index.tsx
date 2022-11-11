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
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ModalCartContext, IModalCart } from "../../context/modalContext";

import ItemModalCart from "../ItemModalCart";

interface IModal {
  modalOpen: boolean;
}

const ModalCart: React.FC<IModal> = (props) => {
  const { setModalCartOpen } = useContext(ModalCartContext) as IModalCart;

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
            <ItemModalCart />
            <ItemModalCart />
            <ItemModalCart />
            <ItemModalCart />
            <ItemModalCart />
            <ItemModalCart />
          </ModalCartList>
          <ContainerFooterModalCart>
            <ContainerSubtotalPriceCart>
              <span>Subtotal:</span>
              <span>$123.00</span>
            </ContainerSubtotalPriceCart>
            <ContainerGroupButtonsModalCart>
              <button className="view-cart">View Cart</button>
              <button className="checkout">Checkout</button>
            </ContainerGroupButtonsModalCart>
          </ContainerFooterModalCart>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default ModalCart;
