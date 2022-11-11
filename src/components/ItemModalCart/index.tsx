import {
  ContainerImageCartItem,
  ButtonRemoveItemCart,
  ContainerCartItem,
  ContainerItemContent,
  ContainerItemPrice,
  ContainerItemTitle,
  ContainerItemQuantity,
  ButtonDecreaseQuantity,
  ButtonIncreaseQuantity,
  ModalCartItem,
  CurrentValue,
} from "./style";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ItemModalCart: React.FC = () => {
  return (
    <>
      <ModalCartItem>
        <ContainerCartItem>
          <ContainerImageCartItem>
            <img
              className="image-item-cart-modal"
              src="/assets/product-4.png"
              alt="img"
            />

            <ButtonRemoveItemCart>
              <MdClose />
            </ButtonRemoveItemCart>
          </ContainerImageCartItem>

          <ContainerItemContent>
            <ContainerItemTitle>
              <h3>Diamond Necklace</h3>
            </ContainerItemTitle>

            <ContainerItemPrice>
              <span>$ 00,00</span>
            </ContainerItemPrice>
          </ContainerItemContent>

          <ContainerItemQuantity>
            <ButtonDecreaseQuantity>
              <span>
                <AiOutlineMinus />
              </span>
            </ButtonDecreaseQuantity>

            <CurrentValue>3</CurrentValue>

            <ButtonIncreaseQuantity>
              <span>
                <AiOutlinePlus />
              </span>
            </ButtonIncreaseQuantity>
          </ContainerItemQuantity>
        </ContainerCartItem>
      </ModalCartItem>
    </>
  );
};

export default ItemModalCart;
