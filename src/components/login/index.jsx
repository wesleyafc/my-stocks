import axios from 'axios';
import { useRef, useContext } from 'react';
import { Context } from '../../context/Context'
import { api_url } from '../../utils/apiURL';

import {
    LoginContainer,
    Form,
    Label,
    Input,
    ButtonLogin,
    SpanError,
    ButtonRegister,
    Title,
    BorderStyle

} from "./styles";

export function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_START',
        });

        try {
            const response = await axios.post(`${api_url}/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            });

            window.location.replace('/transactions')
        } catch (err) {
            dispatch({
                type: 'LOGIN_FAILURE',
            });

        }

    }
    console.log(isFetching);

    return (
        <LoginContainer>

            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                <Label >Email</Label>
                <Input
                    type="text"
                    placeholder="username"
                    ref={userRef}
                />

                <Label >Password</Label>
                <Input
                    type="password"
                    placeholder="password"
                    ref={passwordRef}
                />

                <ButtonLogin
                    type="submit"
                    disabled={isFetching}
                >
                    Login
                </ButtonLogin>

                {isFetching && <SpanError>loading...</SpanError>}

            </Form>
            <ButtonRegister>register</ButtonRegister>
        </LoginContainer>
    )
}
