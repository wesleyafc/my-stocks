import { Sidebar } from '../../components/sidebar/'
import { Single } from '../../components/single'
import { SingleTransactionContainer } from './styles'

export function SingleTransaction() {
    return (

        <SingleTransactionContainer>

            <Single />
            <Sidebar />
        </SingleTransactionContainer>
    )
}
