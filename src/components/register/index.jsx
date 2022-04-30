import { useState } from 'react'
import axios from 'axios'
import { api_url } from '../../utils/apiURL'


import {
    RegisterContainer,
    Form,
    Label,
    Input,
    ButtonRegister,
    ButtonLogin,
    SpanError,
    Title,
    BorderStyle

} from "./styles";

export function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);

        try {
            //conect to api with axios and register
            const response = await axios.post(`${api_url}/sign-up`, {
                username,
                email,
                password
            });

            response.data && window.location.replace("/login")


        } catch (err) {
            setError(true);
        }
    }
    return (
        <RegisterContainer>
            <BorderStyle>

                <Title>Sign-up</Title>
                <Form
                    onSubmit={handleSubmit}
                >

                    <Label >Name</Label>
                    <Input
                        name="username"
                        type="text"
                        placeholder="your name"
                        onChange={e => setUsername(e.target.value)}
                    />

                    <Label >Email</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="email@any.com"
                        onChange={e => setEmail(e.target.value)}

                    />

                    <Label >Password</Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <ButtonLogin type='submit' >create acctount</ButtonLogin>
                    {error && <SpanError>username or email already registered</SpanError>}
                </Form>
                <ButtonRegister>already registered ?</ButtonRegister>
            </BorderStyle>
        </RegisterContainer>
    )
}
