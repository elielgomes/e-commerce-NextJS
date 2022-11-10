import {
  ListItem,
  CardBody,
  ContainerImageCard,
  ContainerCardInfo,
} from "./style";
import { TypePropsProductCard } from "../../interfaces/Iprops";

const ProductCards: React.FC<TypePropsProductCard> = (props) => {
  return (
    <>
      <ListItem>
        <CardBody>
          <ContainerImageCard>
            <img src={props.productImage} alt={props.productName} />
          </ContainerImageCard>
          <ContainerCardInfo>
            <p className="product-name">{props.productName}</p>
            <div className="price-variant">
              <span className="previous-price">
                ${props.productPreviousPrice}
              </span>
              <span className="current-price">
                ${props.productCurrentPrice}
              </span>
            </div>
          </ContainerCardInfo>
        </CardBody>
      </ListItem>
    </>
  );
};

export default ProductCards;
