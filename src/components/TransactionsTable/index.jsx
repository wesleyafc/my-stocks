import { useState, useEffect } from 'react'
import { Table } from '../Table/index'
import { Container } from "./styles";

export function TransactionTable() {


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




    return (
        <Container>
            <h1>Transactions</h1>
            <Table />
            {loading && <p>Loading...</p>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            {data &&
                data.map(({ _id,
                    description,
                    actionsName,
                    quotasAcmount,
                    singleQuotaValue,
                    totalValue,
                    createdAt

                }) => (

                    <>


                        <table>



                            <tbody>
                                <tr>
                                    <td>{description}</td>
                                    <td>{actionsName}</td>
                                    <td>{quotasAcmount}</td>
                                    <td>R${singleQuotaValue}</td>
                                    <td>R${totalValue}</td>
                                    <td>{createdAt}</td>
                                </tr>
                            </tbody>


                        </table>

                    </>

                ))
            }



        </Container >
    )
}