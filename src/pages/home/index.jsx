import axios from 'axios';
import { useState, useEffect } from 'react';
import { api_url } from '../../apiURL'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Transactions } from '../../components/transactions'
import { HomeContainer } from './styles'
import { NewTransactionModal } from '../../components/modal'



export function Home() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await axios.get(api_url + "/transactions")
            setTransactions(response.data)
        }

        fetchTransactions()
    }, [])
    return (
        <div>
            <Header />
            <NewTransactionModal />


            <HomeContainer>
                <Transactions transactions={transactions} />
                <Sidebar />
            </HomeContainer>

        </div>
    )
}
