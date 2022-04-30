import { useState } from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

export function Header() {
    const [value, setValue] = useState(0);
    const logged = false

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


                        <Tab
                            LinkComponent={NavLink}
                            to="/add"
                            label="Add New Transactions" />

                        <Tab
                            LinkComponent={NavLink}
                            to="/transactions"
                            label="My Transactions" />

                        <Tab
                            LinkComponent={NavLink}
                            to="/about"
                            label="About"
                        />

                        < Tab
                            LinkComponent={NavLink}
                            to="/sign-up"
                            label="sign-up" />

                        <Tab
                            LinkComponent={NavLink}
                            to="/profile"
                            label="profile"
                        />
                        <Tab
                            LinkComponent={NavLink}
                            to="/login"
                            label="Login"
                        />

                    </Tabs>

                </Toolbar >
            </AppBar>
        </div>
    )
}
