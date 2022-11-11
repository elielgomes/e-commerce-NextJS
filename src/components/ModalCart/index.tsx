import {
  ModalBody,
  ModalContent,
  ModalButtonClose,
  ContainerModalButtonClose,
} from "./style";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ModalCartContext, IModalCart } from "../../context/modalContext";

interface IModal {
  modalOpen: boolean;
}

const ModalCart: React.FC<IModal> = (props) => {
  const { setModalCartOpen, modalCartOpen } = useContext(
    ModalCartContext
  ) as IModalCart;

  return (
    <>
      <ModalBody isOpen={props.modalOpen}>
        <ModalContent>
          <ContainerModalButtonClose>
            <h3>Cart review</h3>
            <ModalButtonClose onClick={() => setModalCartOpen(false)}>
              <MdClose />
            </ModalButtonClose>
          </ContainerModalButtonClose>
        </ModalContent>
      </ModalBody>
    </>
  );
};

export default ModalCart;
