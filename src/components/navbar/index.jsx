import { NavBarComponent } from './styles'
import { AiOutlineSearch } from "react-icons/ai";

export function NavBar() {
    return (
        <NavBarComponent>


            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        HOME
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>

                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">


                <ul className="topList">
                    <li className="topListItem">
                        LOGIN
                    </li>
                    <li className="topListItem">
                        REGISTER

                    </li>
                </ul>

                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <AiOutlineSearch className="topSearchIcon" />

            </div>
        </NavBarComponent>

    );
}