import { useState } from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

export function Header() {
    const [value, setValue] = useState(0);
    const logged = true
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
                        onChange={(e, val) => setValue(val)}
                    >

                        <Tab
                            LinkComponent={NavLink}
                            to="/"
                            label="Home" />


                        {logged ?
                            <Tab
                                LinkComponent={NavLink}
                                to="/add"
                                label="Add New Transactions" />
                            : null
                        }

                        {logged ?
                            <Tab
                                LinkComponent={NavLink}
                                to="/transactions"
                                label="My Transactions" /> :
                            null
                        }

                        {/* {logged ?
                            <Tab
                                LinkComponent={NavLink}
                                to="/single-transaction-detail"
                                label="Single Transaction" /> :
                            null
                        } */}

                        <Tab
                            LinkComponent={NavLink}
                            to="/about"
                            label="About" />


                        {logged ?
                            <Tab label="Logout" /> :
                            <Tab label="Login" />
                        }

                    </Tabs>

                </Toolbar >
            </AppBar>
        </div>
    )
}
