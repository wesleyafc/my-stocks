import { useState, useEffect } from 'react'
import { Container, Main } from './styles';
import { IoMdOpen } from 'react-icons/io';
import { Link } from 'react-router-dom';

export function Transactions() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        fetch("http://localhost:3333/transactions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    )
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                console.log(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    //create map function to render the table
    return (

        <Container>
            <h1>All Transactions</h1>
            <Main>
                <thead>
                    <tr>
                        <th>ação</th>
                        <th>anotação</th>
                        <th>qtd de cotas</th>
                        <th>valor unitario</th>
                        <th>valor total</th>
                        <th>comprado em</th>
                        <th>opções</th>
                        <th>nova aba**</th>
                    </tr>
                </thead>
                {data &&
                    data.map(({ _id,
                        actionsName,
                        description,
                        quotasAcmount,
                        singleQuotaValue,
                        totalValue,
                        createdAt

                    }) => (

                        <tbody>
                            <tr>
                                <td>{actionsName}</td>
                                <td>{description}</td>
                                <td>{quotasAcmount}</td>
                                <td>{singleQuotaValue}</td>
                                <td>{totalValue}</td>
                                <td>{createdAt}</td>
                                <td>
                                    <button>edit</button>
                                    <hr />
                                    <button>delete</button>
                                </td>
                                <td className="newTab">
                                    <Link to={`/transaction/${_id}`}>
                                        <IoMdOpen />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </Main>
        </Container>


    )

}