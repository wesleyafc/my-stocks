import {
    LoginContainer,
    Form,
    Label,
    Input,
    ButtonLogin,
    ButtonRegister,
    Title,
    BorderStyle

} from "./styles";

export function Login() {
    return (
        <LoginContainer>
            <BorderStyle>

                <Title>Login</Title>
                <Form>
                    <Label >Email</Label>
                    <Input type="email" placeholder="email@any.com" />

                    <Label >Password</Label>
                    <Input type="password" placeholder="password" />

                    <ButtonLogin>Login</ButtonLogin>
                </Form>
                <ButtonRegister>register</ButtonRegister>
            </BorderStyle>
        </LoginContainer>
    )
}
