import { Container, Nav, NavLink } from './styles';
import { Header } from '../header';
import bg from '../../assets/wave.svg'


export function NavBar() {
    const logged = true;

    return (
        <Container>
            <Nav>

                <NavLink
                    to="/">
                    HOMEPAGE
                </NavLink >

                <NavLink
                    to="about">
                    ABOUT
                </NavLink >

                <NavLink
                    to="/transactions">
                    {logged ? 'TRANSACTIONS' : ''}

                </NavLink >

                <NavLink
                    to="/off">
                    {logged ? 'LOGOUT' : 'LOGIN'}
                </NavLink >


                <img src="https://i.imgur.com/0LKUfix.jpeg" alt="" />
            </Nav>
            <Header />

            <img src={bg} alt="" />


        </Container>
    )
}
