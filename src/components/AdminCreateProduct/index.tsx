import { useState } from "react";
import {
  ContainerSectionAdmin,
  Form,
  FormGroup,
  FormControl,
  ContainerButtonSubmit,
  FormRow,
  ImageInput,
  BodyImageInput,
  ContainerInputImage,
} from "./style";
import axios from "axios";

const AdminCreateProduct = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productImage, setProductImage] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productOldPrice, setProductOldPrice] = useState<string>("");
  const [productQuantityStock, setProductQuantityStock] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");

  const saveProductImage = (e: any) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setProductImage(e.target.files[0]);
  };

  async function postProduct(e: any) {
    e.preventDefault();

    const form: any = new FormData();

    form.append("name", productName);
    form.append("imagePath", productImage);
    form.append("description", productDescription);
    form.append("currentPrice", productPrice);
    form.append("oldPrice", productOldPrice);
    form.append("quantityStock", productQuantityStock);
    form.append("category", productCategory);

    await axios
      .post(`http://localhost:3001/products`, form)
      .then((data) => {
        console.log(data);
      })
      .catch(console.log);

    setProductName("");
    setProductImage("");
    setProductCategory("");
    setProductPrice("");
    setProductOldPrice("");
    setProductQuantityStock("");
    setProductDescription("");
  }

  return (
    <>
      <ContainerSectionAdmin>
        <Form>
          <FormRow>
            <FormGroup>
              <label>Name</label>
              <FormControl
                type="text"
                name="name"
                placeholder="Product name"
                value={productName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProductName(e.target.value)
                }
              />
            </FormGroup>

            <FormGroup>
              <label>Category</label>
              <select
                name="category"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setProductCategory(e.target.value)
                }
              >
                <option disabled selected>
                  Select category
                </option>
                <option value="6377ad51ea25a000e598aae4">Brincos</option>
                <option value="6377ad59ea25a000e598aae6">Aneis</option>
                <option value="6377ad5fea25a000e598aae8">Pulseiras</option>
                <option value="6377ad6dea25a000e598aaea">Colares</option>
              </select>
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>Price</label>
              <FormControl
                type="number"
                name="price"
                placeholder="0"
                value={productPrice}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProductPrice(e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <label>Old Price</label>
              <FormControl
                type="number"
                name="old-price"
                placeholder="0"
                value={productOldPrice}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProductOldPrice(e.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <label>Stock</label>
              <FormControl
                type="number"
                name="stock"
                placeholder="0"
                value={productQuantityStock}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProductQuantityStock(e.target.value)
                }
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <label>Description</label>
            <textarea
              rows={5}
              cols={70}
              name="description"
              placeholder="Description..."
              value={productDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setProductDescription(e.target.value)
              }
            />
          </FormGroup>
          <ContainerInputImage>
            <BodyImageInput htmlFor="input-image" tabIndex={0}>
              <ImageInput
                type="file"
                accept="image/*"
                id="input-image"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  saveProductImage(e)
                }
              />
              <span>
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    width="150"
                    height="150"
                    alt="image"
                  />
                ) : (
                  "Choose an image"
                )}
              </span>
            </BodyImageInput>
          </ContainerInputImage>
          <ContainerButtonSubmit>
            <button onClick={(e) => postProduct(e)}>Send</button>
          </ContainerButtonSubmit>
        </Form>
      </ContainerSectionAdmin>
    </>
  );
};

export default AdminCreateProduct;
