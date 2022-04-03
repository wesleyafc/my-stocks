import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Transactions } from '../../components/transactions'

import { HomeContainer } from './styles'


export function Home() {
    return (
        <>
            <Header />
            <HomeContainer>
                <Transactions />
                <Sidebar />
            </HomeContainer>
        </>
    )
}
