import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { NavBarComponent } from './styles'
// import { AiOutlineSearch } from "react-icons/ai";

export function NavBar() {
    return (
        <NavBarComponent>


            <div className="topCenter">
                <ul className="topList">
                    <Link
                        className="topListItem"
                        to="/">
                        HOMEPAGE
                    </Link>

                    <Link
                        className="topListItem"
                        to="about">
                        ABOUT
                    </Link>

                    <Link
                        className="topListItem"
                        to="/transactions">
                        TRANSACTIONS
                    </Link>
                </ul>
            </div>
            {/* <div className="topRight">


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

            </div> */}
        </NavBarComponent>

    );
}