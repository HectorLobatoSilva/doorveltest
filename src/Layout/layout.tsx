import { Box, CssBaseline, Toolbar } from "@mui/material";
import Nav from "components/Nav";
import SideNav from "components/SideNav";
import { useDataContext } from "Context";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const { currentChild, currentParent } = useDataContext();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Nav />
            <SideNav />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, maxHeight: "100vh" }}
            >
                <Toolbar />
                <p>
                    <strong>{currentParent}</strong>
                    <small>{currentChild ? ` / ${currentChild}` : null}</small>
                </p>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
