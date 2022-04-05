import { api_url } from '../../apiURL'
import axios from 'axios'
import { Buttons } from './styles'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export function TransactionBody({ transaction }) {

    //format data timestamp
    const date = new Date(transaction.createdAt);
    const dateFormatted = date.toLocaleDateString('pt-BR');

    //make multiply by single value by total amount
    const resultTotal = transaction.quotasAmmount * transaction.singleQuotaValue;
    const currencyFormatted = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(resultTotal);

    const handleDeleteTransaction = async () => {
        const id = transaction._id
        //create confirmation before deleting transaction
        const confirm = window.confirm(`Deseja excluir as ações *# ${transaction.actionsName} #* no valor de ${currencyFormatted} ?
       ISSO NÃO PODE SER DESFEITO!!!
        `)
        if (confirm) {
            await axios.delete(api_url + '/transaction/' + id)
            window.location.reload()
        }
    }

    return (

        <tbody>
            <tr>
                <td>{transaction.actionsName}</td>
                <td>{transaction.quotasAmmount}</td>
                <td>R$ {transaction.singleQuotaValue}</td>
                <td>{currencyFormatted}</td>
                <td>{dateFormatted}</td>
                <td>
                    <Buttons >
                        <AiOutlineEdit
                            className="optionIcon"
                        />

                        <AiOutlineDelete
                            onClick={handleDeleteTransaction}
                            className="optionIcon"
                        />
                    </Buttons>
                </td>
            </tr>
        </tbody>

    )
}
