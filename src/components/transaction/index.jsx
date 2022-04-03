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
                        <AiOutlineEdit className="optionIcon" />
                        <AiOutlineDelete className="optionIcon" />
                    </Buttons>
                </td>
            </tr>
        </tbody>

    )
}
