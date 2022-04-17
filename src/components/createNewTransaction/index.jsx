import { Box, Button, FormLabel, TextField } from "@mui/material";
import { api_url } from "../../utils/apiURL";

import { useState } from "react";
import axios from "axios";



export function CreateNewTransaction() {

    const [input, setInput] = useState({
        actionsName: '',
        actionsAmount: '',
        singleQuotaValue: '',
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    const senRequestFromDataBase = async () => {

        await axios.post(api_url + '/transaction', input)
        window.location.replace("/transactions")

    }

    return (
        <form onSubmit={handleSubmit}>

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
                    value={input.actionsName}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="actionsName"
                />

                <FormLabel>quotas ammount</FormLabel>
                <TextField
                    value={input.quotasAmmount}
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
                    value={input.singleQuotaValue}
                    onChange={handleChange}
                    type="number"
                    step="0.01"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="singleQuotaValue"
                />
                <Button
                    onClick={senRequestFromDataBase}
                    variant="contained"
                    type="submit">save</Button>

            </Box>


        </form>
    )
}
