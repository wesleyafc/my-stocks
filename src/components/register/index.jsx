import { useState } from 'react'
import axios from 'axios'
import { api_url } from '../../utils/apiURL'


import {
    Button,
    Container,
    Input,
    SubTitle,
    Title,
    Wrapper

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
        <Container>
            <Wrapper>
                <Title>Entrar</Title>
                <SubTitle>Entrar na sua conta</SubTitle>
                <Input placeholder='Usuario' />
                <Input type='password' placeholder='Senha' />
                <Button>entrar</Button>

                <Title>Criar Nova Conta</Title>
                <Input placeholder='Usuario' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Senha' />
                <Button>registrar</Button>

            </Wrapper>
        </Container>
    )
}



{/* <Title>Sign-up</Title>
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
              */}
