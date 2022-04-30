import { useState, useContext } from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { Context } from '../../context/Context';


export function Header() {
    const [value, setValue] = useState(0);
    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })


    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <AppBar
                sx={{ backgroundColor: "#111826" }}
                position="sticky" >
                <Toolbar >

                    <Typography>
                        <GiReceiveMoney />
                    </Typography>

                    <Tabs
                        sx={{ ml: 'auto' }}
                        indicatorColor='secondary'
                        textColor='inherit'
                        value={value}
                        onChange={handleChange}
                    >

                        <Tab
                            LinkComponent={NavLink}
                            to="/"
                            label="Home" />


                        {user ?
                            <Tab
                                LinkComponent={NavLink}
                                to="/add"
                                label="Add New Transactions" />
                            : null
                        }

                        {user ?
                            <Tab
                                LinkComponent={NavLink}
                                to="/transactions"
                                label="My Transactions" /> :
                            null
                        }

                        {/* later move this for footer  */}
                        <Tab
                            LinkComponent={NavLink}
                            to="/about"
                            label="About"
                        />

                        {user ?
                            null
                            :
                            < Tab
                                LinkComponent={NavLink}
                                to="/sign-up"
                                label="sign-up" />
                        }

                        {user ? <Tab
                            LinkComponent={NavLink}
                            to="/profile"
                            label="profile"
                        /> : <Tab
                            LinkComponent={NavLink}
                            to="/login"
                            label="Login"
                        />}

                        {user && <Tab
                            LinkComponent={NavLink}
                            to="/"
                            label="Logout"
                            onClick={handleLogout}
                        />}

                    </Tabs>

                </Toolbar >
            </AppBar>
        </div>
    )
}
