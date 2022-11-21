import { useContext, useState, useEffect } from "react";
import {
  ContainerCartSection,
  ContainerTable,
  BodyListCartSection,
  TableCartProduct,
  TableHead,
  BodyPurchaseSummary,
  PurchaseSummary,
  PurchaseSubtotal,
  PurchaseTotal,
  PurchaseShipping,
} from "./style";
import CartSectionItem from "../CartSectionItem";
import { CartContext, ICart } from "../../context/cartContext";

const CartSection = () => {
  const { cartItems, setCartItems } = useContext(CartContext) as ICart;
  const [subtotal, setSubTotal] = useState<number>(0);
  const [shippingPrice, setShippingPrice] = useState<string>("0");

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

  useEffect(() => {
    let totalPrice: number = 0;

    cartItems.map((item) => {
      totalPrice += item.quantity * item.price;
    });

    setSubTotal(totalPrice);
  }, [cartItems]);

  return (
    <>
      <ContainerCartSection>
        <ContainerTable>
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
              {cartItems.map(({id, image, name, price, quantity}) => {
                return (
                  <CartSectionItem
                    removeItemCartSection={() => removeItem(id)}
                    increaseItemCartSection={() =>
                      increaseQuantityItem(id)
                    }
                    decreaseItemCartSection={() =>
                      decreaseQuantityItem(id)
                    }
                    image={`http://localhost:3001/products/image/${image}`}
                    name={name}
                    price={price}
                    quantity={quantity}
                    totalPricePerProduct={price * quantity}
                  />
                );
              })}
            </BodyListCartSection>
          </TableCartProduct>
        </ContainerTable>
        <BodyPurchaseSummary>
          <PurchaseSummary>
            <li>
              <PurchaseSubtotal>
                <span>Subtotal</span>
                <span>$ {subtotal}</span>
              </PurchaseSubtotal>
            </li>
            <li>
              <PurchaseShipping>
                <span>Shipping</span>
                <form className="container-shipping">
                  <div>
                    <span>$00 </span>
                    <input
                      type="radio"
                      name="shipping"
                      id="free"
                      value={0}
                      onChange={(e) => setShippingPrice(e.target.value)}
                    />
                    <label htmlFor="free">Free</label>
                  </div>
                  <div>
                    <span>$10 </span>
                    <input
                      type="radio"
                      name="shipping"
                      id="sedex"
                      value={10}
                      onChange={(e) => setShippingPrice(e.target.value)}
                    />
                    <label htmlFor="sedex">Sedex</label>
                  </div>
                  <div>
                    <span>$40 </span>
                    <input
                      type="radio"
                      name="shipping"
                      id="shipping-company"
                      value={40}
                      onChange={(e) => setShippingPrice(e.target.value)}
                    />
                    <label htmlFor="shipping-company">Shipping Company</label>
                  </div>
                </form>
              </PurchaseShipping>
            </li>
            <li>
              <PurchaseTotal>
                <span>Total</span>
                <span>$ {subtotal + Number(shippingPrice)}</span>
              </PurchaseTotal>
            </li>
          </PurchaseSummary>
        </BodyPurchaseSummary>
      </ContainerCartSection>
    </>
  );
};

export default CartSection;
