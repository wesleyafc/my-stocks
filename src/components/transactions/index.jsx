import { useState, useEffect } from 'react';
import { Transaction } from '../transaction'

import { UlContainer } from './styles'
import axios from 'axios'

import { api_url } from '../../utils/apiURL'
import { NewTransactionModal } from '../newTransaction';

import { HalfMalf } from 'react-spinner-animated'
import 'react-spinner-animated/dist/index.css'

export function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchTransactions = async () => {
            setIsLoading(true)
            const response = await axios.get(api_url + "/transactions")
            setTransactions(response.data)
            setIsLoading(false)
        }

        fetchTransactions()
    }, [])
    return (

        <>
            <NewTransactionModal />
            <UlContainer >
                {isLoading ? <HalfMalf
                    text={"Loading..."}
                    type="TailSpin"
                    isLoading={isLoading}
                    speed={5}
                />
                    : ''}

                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <Transaction transaction={transaction} />
                    </li>
                ))}
            </UlContainer>
        </>

    )
}
