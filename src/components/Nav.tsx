import React from "react";
import Link from "next/link";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    Link as MUILink,
} from "@mui/material";

import { useDataContext } from "Context";
import { ParentAmenity } from "interfaces";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    const { parentAmenities, setCurrentParent, setCurrentChild } =
        useDataContext();

    const handleRoute = (parentAmenity: ParentAmenity) => {
        const { name, seo_friendly } = parentAmenity;
        setCurrentParent!(name);
        setCurrentChild!("");
        router.push(`/${seo_friendly}`);
    };

    const handleMain = () => {
        setCurrentParent!("");
        setCurrentChild!("");
        router.push("/");
    };

    return (
        <AppBar
            component="nav"
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", sm: "block" },
                    }}
                >
                    <MUILink
                        component={Button}
                        sx={{
                            color: "#fff",
                            textDecoration: "none",
                        }}
                        onClick={handleMain}
                    >
                        Doorvel
                    </MUILink>
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {parentAmenities?.map((parentAmenity: ParentAmenity) => (
                        <MUILink
                            component={Button}
                            sx={{
                                color: "#fff",
                                textDecoration: "none",
                            }}
                            key={`parent-${parentAmenity.id}-desktop`}
                            onClick={() => handleRoute(parentAmenity)}
                        >
                            {parentAmenity.name}
                        </MUILink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
