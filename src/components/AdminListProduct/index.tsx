import { useEffect, useState } from "react";
import { ContainerAdminList, AdminList, ContainerSearchInput } from "./style";
import AdminCardProduct from "../AdminCardProduct";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

interface IProducts {
  _id: string;
  name: string;
  imagePath: string;
  currentPrice: number;
}

const AdminListProduct = () => {
  const [listProducts, setListProducts] = useState<IProducts[]>([]);
  const [filterListProducts, setFilterListProducts] = useState<IProducts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [productOrder, setProductOrder] = useState<number>(1);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setListProducts(response.data);
      setFilterListProducts(response.data);
    });
  }, [refresh]);

  const searchProduct = (value: string) => {
    setSearch(value);
    let filter = filterListProducts.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });
    setListProducts(filter);
  };

  const orderProduct = (value: string) => {
    value == "A" && setProductOrder(1);
    value == "Z" && setProductOrder(-1);
  };

  const deleteProduct = (id: string) => {
    axios.delete(`http://localhost:3001/products/${id}`);
    setRefresh(!refresh);
  };

  return (
    <>
      <ContainerAdminList>
        <ContainerSearchInput>
          <Link href="/admin/create-product">
            <AiOutlinePlus />
            Create Product
          </Link>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              orderProduct(e.target.value)
            }
          >
            <option value="" disabled selected>
              Order by
            </option>
            <option value="A">A-Z</option>
            <option value="Z">Z-A</option>
          </select>

          <input
            type="search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              searchProduct(e.target.value)
            }
          />
        </ContainerSearchInput>

        <AdminList>
          {listProducts
            .sort((a, b) => {
              if (a.name > b.name) {
                return productOrder * 1;
              }
              if (a.name < b.name) {
                return productOrder * -1;
              }
              return 0;
            })
            .map((item) => {
              return (
                <AdminCardProduct
                  clickToRemove={() => deleteProduct(item._id)}
                  image={`http://localhost:3001/products/image/${item.imagePath}`}
                  name={item.name}
                  id={item._id}
                  price={item.currentPrice}
                />
              );
            })}
        </AdminList>
      </ContainerAdminList>
    </>
  );
};

export default AdminListProduct;
