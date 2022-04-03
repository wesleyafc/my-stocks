import { Buttons } from './styles'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


export function TransactionBody() {
    return (

        <tbody>
            <tr>
                <td>WEE11</td>
                <td>12</td>
                <td>125,98</td>
                <td>2568,45</td>
                <td>12/12/2022</td>
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
