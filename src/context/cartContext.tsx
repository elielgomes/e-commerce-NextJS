import { createContext, useState, ReactNode } from "react";

export interface ICartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICart {
  cartItems: ICartItem[];
  setCartItems: Function;
}

export const CartContext = createContext<ICart | {}>({});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICart | []>(
    typeof window != "undefined"
      ? JSON.parse(localStorage.getItem("cart") ?? "[]")
      : []
  );

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
