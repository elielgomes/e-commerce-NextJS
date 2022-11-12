import { useEffect, useState, useContext } from "react";
import ProductCards from "../ProductCards";
import { ContainerListProducts, ListProducts } from "./style";
import { CartContext, ICart } from "../../context/cartContext";

interface IProducts {
  id: string;
  name: string;
  image: string;
  quantity: number;
  previous_price: number;
  current_price: number;
}

const ProductList: React.FC = () => {
  const { cartItems, setCartItems } = useContext(CartContext) as ICart;
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = async () => {
    let response = await fetch("/products/productList.json");
    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  const addCartItem = (
    id: string,
    name: string,
    image: string,
    current_price: number
  ) => {
    if (cartItems.length > 0) {
      let duplicateItemCheck: boolean = false;

      cartItems.map((item, index) => {
        if (item.id == id) {
          let items = [...cartItems];
          items[index].quantity += 1;
          setCartItems(items);
          duplicateItemCheck = true;
        }
      });

      if (duplicateItemCheck == false) {
        setCartItems([
          ...cartItems,
          {
            id: id,
            quantity: 1,
            name: name,
            image: image,
            price: current_price,
          },
        ]);
      }
    } else {
      setCartItems([
        {
          id: id,
          quantity: 1,
          name: name,
          image: image,
          price: current_price,
        },
      ]);
    }
  };

  return (
    <>
      <ContainerListProducts>
        <ListProducts>
          {products.map(
            ({ id, name, image, previous_price, current_price }) => {
              return (
                <ProductCards
                  addCartItem={() =>
                    addCartItem(id, name, image, current_price)
                  }
                  key={id}
                  productName={name}
                  productImage={image}
                  productPreviousPrice={previous_price}
                  productCurrentPrice={current_price}
                />
              );
            }
          )}
        </ListProducts>
      </ContainerListProducts>
    </>
  );
};

export default ProductList;
