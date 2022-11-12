import {
  ContainerImageCartItem,
  ButtonRemoveItemCart,
  ContainerCartItem,
  ContainerItemContent,
  ContainerItemPrice,
  ContainerItemTitle,
  ModalCartItem,
  ContainerItemQuantity,
  ButtonDecreaseQuantity,
  ButtonIncreaseQuantity,
  CurrentValue,
} from "./style";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface IProps {
  image: string;
  name: string;
  price: number;
  quantityValue: number;
  removeCartItem: () => void;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}

const ItemModalCart: React.FC<IProps> = (props) => {
  return (
    <>
      <ModalCartItem>
        <ContainerCartItem>
          <ContainerImageCartItem>
            <img
              className="image-item-cart-modal"
              src={props.image}
              alt="Product-Image"
            />

            <ButtonRemoveItemCart onClick={props.removeCartItem}>
              <MdClose />
            </ButtonRemoveItemCart>
          </ContainerImageCartItem>

          <ContainerItemContent>
            <ContainerItemTitle>
              <h3>{props.name}</h3>
            </ContainerItemTitle>

            <ContainerItemPrice>
              <span>${props.price}</span>
            </ContainerItemPrice>
          </ContainerItemContent>
          <ContainerItemQuantity>
            <ButtonDecreaseQuantity onClick={props.decreaseQuantity}>
              <span>
                <AiOutlineMinus />
              </span>
            </ButtonDecreaseQuantity>

            <CurrentValue>{props.quantityValue}</CurrentValue>

            <ButtonIncreaseQuantity onClick={props.increaseQuantity}>
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
