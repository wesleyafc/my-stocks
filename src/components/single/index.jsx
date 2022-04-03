import { Sidebar } from '../../components/sidebar/'
import { SingleContainer } from './styles'

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export function Single() {
    return (

        <SingleContainer>



            <h1 className="actionName">WESD11</h1>
            <div className="singleTransactionInfo">
                <p className="singleTransactionAmount">comprados: 43</p>
                <hr />
                <p className="paid">valor unitarios: 44,38</p>
                <hr />

                <p className="totalPaid">Total Pago: 2312,18</p>
                <hr />

                <p className="boughtIn">Data: 22/02/2022</p>
            </div>
            <div className="options">
                <AiOutlineEdit className="optionIcon" />
                <AiOutlineDelete className="optionIcon" />
            </div>
        </SingleContainer>
    )
}
