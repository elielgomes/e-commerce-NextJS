import { createContext, useState, ReactNode } from "react";

export interface ICart {
  cartItems: number;
  setCartItems: Function;
}

export const CartContext = createContext<ICart | {}>({});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<number>(0);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;