import {
  ItemCartList,
  ItemButtonRemove,
  ItemProductImage,
  ItemProductName,
  ItemProductPrice,
  ItemProductQuantity,
  ItemProductTotalPrice,
  ContainerButtonsQuantityCart,
  ButtonDecrease,
  ButtonIncrease,
  CurrentQuantity,
} from "./style";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface IPropsCartItemsSection {
  image: string;
  name: string;
  price: number;
  quantity: number;
  totalPricePerProduct: number;
  removeItemCartSection: () => void;
  decreaseItemCartSection: () => void;
  increaseItemCartSection: () => void;
}

const CartSectionItem: React.FC<IPropsCartItemsSection> = (props) => {
  return (
    <>
      <ItemCartList>
        <ItemButtonRemove onClick={props.removeItemCartSection}>
          <button className="remove-item">
            <span>
              <MdClose />
            </span>
          </button>
        </ItemButtonRemove>
        <ItemProductImage>
          <img src={props.image} alt="Product-Image" />
        </ItemProductImage>
        <ItemProductName>
          <span>{props.name}</span>
        </ItemProductName>
        <ItemProductPrice>
          <span>$ {props.price}</span>
        </ItemProductPrice>
        <ItemProductQuantity>
          <ContainerButtonsQuantityCart>
            <ButtonDecrease onClick={props.decreaseItemCartSection}>
              <span>
                <AiOutlineMinus />
              </span>
            </ButtonDecrease>

            <CurrentQuantity>{props.quantity}</CurrentQuantity>

            <ButtonIncrease onClick={props.increaseItemCartSection}>
              <span>
                <AiOutlinePlus />
              </span>
            </ButtonIncrease>
          </ContainerButtonsQuantityCart>
        </ItemProductQuantity>
        <ItemProductTotalPrice>
          <span>$ {props.totalPricePerProduct}</span>
        </ItemProductTotalPrice>
      </ItemCartList>
    </>
  );
};

export default CartSectionItem;
