import { useState } from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { ModalContainer, InputContainer } from './styles'
import axios from 'axios';
import { api_url } from '../../utils/apiURL'
import { onlyNumbers } from '../../utils/handle'
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

    const [actionsName, setActionName] = useState('')
    const [quotasAmmount, setQuotasAmmount] = useState()
    const [singleQuotaValue, setSingleQuotaValue] = useState()


    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = {
            actionsName,
            quotasAmmount,
            singleQuotaValue
        };

        await axios.post(api_url + "/transaction", newTransaction)
        window.location.replace('/transactions')
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
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            styles={"width: 100%"}
                            placeholder='nome da ação'
                            onChange={e => setActionName(e.target.value)}
                        />

                        <input
                            onKeyPress={onlyNumbers}
                            type="number"
                            placeholder='quantidade de cotas adquiridas'
                            onChange={e => setQuotasAmmount(e.target.value)}

                        />

                        <input
                            onKeyPress={onlyNumbers}
                            type="number" step="0.01"
                            placeholder='valor unitario da cota'
                            onChange={e => setSingleQuotaValue(e.target.value)}

                        />

                        <button type="submit">salvar</button>
                    </form>
                </InputContainer>
            </Modal>
        </ModalContainer>
    )
}
