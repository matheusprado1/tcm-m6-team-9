import { StyledBackground, StyledModal } from "./styles";
import { IChildren } from "../../interfaces";

interface ModalProps extends IChildren {
    title: string;
    setOpenModal: (arg:boolean) => void;
}

export function Modal({ title, setOpenModal, children  }: ModalProps) {
    return (
        <StyledBackground>
            <StyledModal>
                <div className="modal_header">
                    <h1 className="modal_title">{title}</h1>
                    <p onClick={() => setOpenModal(false)}>X</p>
                </div>
                <div className="modal_main">{children}</div>
            </StyledModal>
        </StyledBackground>
    );
}