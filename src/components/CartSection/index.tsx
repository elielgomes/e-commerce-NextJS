import { useContext } from "react";
import {
  ContainerCartSection,
  BodyListCartSection,
  TableCartProduct,
  TableHead,
} from "./style";
import CartSectionItem from "../CartSectionItem";
import { CartContext, ICart } from "../../context/cartContext";

const CartSection = () => {
  const { cartItems, setCartItems } = useContext(CartContext) as ICart;

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
      <ContainerCartSection>
        <TableCartProduct>
          <TableHead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </TableHead>

          <BodyListCartSection>
            {cartItems.map((item) => {
              return (
                <CartSectionItem
                  removeItemCartSection={() => removeItem(item.id)}
                  increaseItemCartSection={() => increaseQuantityItem(item.id)}
                  decreaseItemCartSection={() => decreaseQuantityItem(item.id)}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  totalPricePerProduct={item.price * item.quantity}
                />
              );
            })}
          </BodyListCartSection>
        </TableCartProduct>
      </ContainerCartSection>
    </>
  );
};

export default CartSection;
