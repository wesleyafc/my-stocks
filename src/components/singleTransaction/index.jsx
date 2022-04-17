import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

import { Box, Button, FormLabel, TextField } from "@mui/material";
import { api_url } from "../../utils/apiURL";

export function SingleTransaction() {
    const id = useParams().transaction_id
    const [inputs, setInputs] = useState({})
    const cor = "#10b981"


    useEffect(() => {
        const getSingleTransaction = async () => {

            const response = await axios.get(api_url + '/transaction/' + id)
            setInputs(response.data)
        }
        getSingleTransaction()

    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const senRequestFromDataBase = async () => {

        await axios.put(api_url + `/transaction/${id}`, inputs)
        window.location.replace("/transactions")
    }

    return (
        <>
            {inputs && (< form onSubmit={handleSubmit} >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent={'center'}
                    maxWidth={'700px'}
                    alignContent={'center'}
                    alignSelf={'center'}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    marginTop={'20px'}
                >

                    <FormLabel>action Name</FormLabel>
                    <TextField
                        value={inputs.actionsName}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="actionsName"
                    />

                    <FormLabel>quotas ammount</FormLabel>
                    <TextField
                        value={inputs.quotasAmmount}
                        onChange={handleChange}
                        type="number"
                        step="0.01"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="quotasAmmount"
                    />

                    <FormLabel>single quota value</FormLabel>
                    <TextField
                        value={inputs.singleQuotaValue}
                        onChange={handleChange}
                        type="number"
                        step="0.01"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        name="singleQuotaValue"
                    />
                    <Button
                        color="sucess"
                        onClick={senRequestFromDataBase}
                        variant="contained"
                        type="submit">save</Button>

                </Box>
            </form >)}
        </>
    )
}


