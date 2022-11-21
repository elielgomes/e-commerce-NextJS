import { useEffect, useState, useContext } from "react";
import ProductCards from "../ProductCards";
import { ContainerListProducts, ListProducts } from "./style";
import { CartContext, ICart } from "../../context/cartContext";
import axios from "axios";

interface IProducts {
  _id: string;
  name: string;
  imagePath: string;
  quantityStock: number;
  quantity: number;
  oldPrice: number;
  currentPrice: number;
}

const ProductList: React.FC = () => {
  const { cartItems, setCartItems } = useContext(CartContext) as ICart;
  const [products, setProducts] = useState<IProducts[]>([]);

  async function getProducts() {
    try {
      await axios.get("http://localhost:3001/products").then((response) => {
        return response;
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        console.log(response.data)
        setProducts(response.data);
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
            ({ _id, name, imagePath, oldPrice, currentPrice }) => {
              return (
                <ProductCards
                  addCartItem={() =>
                    addCartItem(_id, name, imagePath, currentPrice)
                  }
                  key={_id}
                  productName={name}
                  productImage={`http://localhost:3001/products/image/${imagePath}`}
                  productPreviousPrice={oldPrice}
                  productCurrentPrice={currentPrice}
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
