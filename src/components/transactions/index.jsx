import { Container, Main } from './styles';
import { TransactionBody } from '../transaction/index'

export function Transactions({ transactions }) {

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

                {transactions.map((t) => (
                    <TransactionBody
                        transaction={t}
                        key={t._id}
                    />
                ))}



            </Main>
        </Container>


    )

}