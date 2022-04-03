import { Container, Main } from './styles';
import { TransactionBody } from '../transaction/index'

export function Transactions() {

    return (

        <Container>
            <h1>Recent Transactions</h1>
            <Main>
                <thead>
                    <tr>
                        <th>ação</th>
                        <th>qtd de cotas</th>
                        <th>valor unitario</th>
                        <th>valor total</th>
                        <th>comprado em</th>
                        <th>opções</th>
                    </tr>
                </thead>
                <TransactionBody />
                <TransactionBody />
                <TransactionBody />
                <TransactionBody />

            </Main>
        </Container>


    )

}