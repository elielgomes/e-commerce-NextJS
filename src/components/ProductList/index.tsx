import { useEffect, useState } from "react";
import ProductCards from "../ProductCards";
import { ContainerListProducts, ListProducts } from "./style";

interface IProducts {
  name: string;
  image: string;
  previous_price: number;
  current_price: number;
}

const ProductList = () => {
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

  return (
    <>
      <ContainerListProducts>
        <ListProducts>
          {products.map((product, index) => {
            return (
              <ProductCards
                key={index+product.name}
                productName={product.name}
                productImage={product.image}
                productPreviousPrice={product.previous_price}
                productCurrentPrice={product.current_price}
              />
            );
          })}
        </ListProducts>
      </ContainerListProducts>
    </>
  );
};

export default ProductList;
