import {
    RegisterContainer,
    Form,
    Label,
    Input,
    ButtonRegister,
    ButtonLogin,
    Title,
    BorderStyle

} from "./styles";

export function Register() {
    return (
        <RegisterContainer>
            <BorderStyle>

                <Title>Sign-up</Title>
                <Form>

                    <Label >Name</Label>
                    <Input
                        name="username"
                        type="text"
                        placeholder="your name"
                    />

                    <Label >Email</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="email@any.com"
                    />

                    <Label >Password</Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                    />

                    <Label >Confirm Password</Label>
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <ButtonLogin >create acctount</ButtonLogin>
                </Form>
                <ButtonRegister>already registered ?</ButtonRegister>
            </BorderStyle>
        </RegisterContainer>
    )
}
