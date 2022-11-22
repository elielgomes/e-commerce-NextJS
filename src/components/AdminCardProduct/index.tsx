import {
  BodyCard,
  ContainerImage,
  ContainerName,
  ContainerId,
  ContainerPrice,
  ContainerButtons,
} from "./style";
import Link from "next/link";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

interface ICardProps {
  image: string;
  name: string;
  id: string;
  price: number;
  clickToRemove: () => void;
}

const AdminCardProduct: React.FC<ICardProps> = (props) => {
  return (
    <>
      <li>
        <BodyCard>
          <ContainerImage>
            <img src={props.image} alt="Product-Image" />
          </ContainerImage>
          <ContainerName>
            <span>{props.name}</span>
          </ContainerName>
          <ContainerId>
            <span>{props.id}</span>
          </ContainerId>
          <ContainerPrice>
            <span>$ {props.price}</span>
          </ContainerPrice>
          <ContainerButtons>
            <button onClick={props.clickToRemove}>
              <FaTrash />
            </button>
            <Link href={`/admin/edit-product/${props.id}`}>
              <FaPencilAlt />
            </Link>
          </ContainerButtons>
        </BodyCard>
      </li>
    </>
  );
};

export default AdminCardProduct;
