import { useState } from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { ModalContainer, InputContainer } from './styles'
Modal.setAppElement('#root');
const customStyles = {

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 5, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    h2: {
        fontSize: '150px'
    }

}


export function NewTransactionModal() {


    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(event) {
        event.preventDefault();
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <ModalContainer>

            <button onClick={handleOpenNewTransactionModal}>
                nova transação
            </button>

            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
                portalClassName={"test"}
                style={customStyles}
            >

                <button type="button">
                    <AiOutlineClose
                        className="close-modal-button"
                        onClick={handleCloseNewTransactionModal} />
                </button>

                <InputContainer>
                    <h2>nova entrada</h2>
                    <form >
                        <input
                            styles={"width: 100%"}
                            placeholder='nome da ação'
                        />

                        <input
                            type="number"
                            placeholder='quantidade de cotas adquiridas'
                        />

                        <input
                            type="number"
                            placeholder='valor unitario da cota'
                        />

                        <button type="submit">salvar</button>
                    </form>
                </InputContainer>


            </Modal>
        </ModalContainer>
    )
}
