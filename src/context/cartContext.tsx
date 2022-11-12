import { createContext, useState, ReactNode } from "react";

interface ICartItem {
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
  const [cartItems, setCartItems] = useState<ICart | []>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
