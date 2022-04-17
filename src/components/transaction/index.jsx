import { TransactionContainerCards } from './styles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { api_url } from '../../utils/apiURL'



export function Transaction(props) {
    const {
        _id,
        actionsName,
        createdAt,
        quotasAmmount,
        singleQuotaValue
    } = props.transaction

    //format data timestamp createdAt and updatedAt
    const createdAtFormatted = new Date(createdAt).toLocaleDateString('pt-BR')

    //make multiply by single value by total amount
    const resultTotal = quotasAmmount * singleQuotaValue;
    const resultTotalFormatted = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(resultTotal);

    const singleQuotaValueFormatted = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(singleQuotaValue);


    const handleDeleteTransaction = async () => {
        //create confirmation message before deleting transaction
        const confirm = window.confirm('Deseja realmente excluir essa transação?')
        if (confirm) {
            await axios.delete(api_url + `/transaction/${_id}`)
            window.location.reload()
        }
    }

    return (
        <>
            <TransactionContainerCards>
                <h1>{actionsName}</h1>
                <h3><span>Total</span> {resultTotalFormatted}</h3>
                <hr />
                <h4><span>Preço unitario</span> {singleQuotaValueFormatted}</h4>
                <hr />
                <h2> <span>Quantidade de cotas</span> {quotasAmmount}</h2>
                <hr />

                <Button
                    className="update-button"
                    LinkComponent={Link}
                    to={`/single-transaction-detail/${_id}`}
                    sx={{ mt: "auto" }}
                >Update</Button>


                <Button className="delete-button"
                    onClick={handleDeleteTransaction}
                    sx={{ mt: "auto" }}>
                    Delete</Button>

                <p>{createdAtFormatted}</p>

            </TransactionContainerCards >
        </>
    )
}
