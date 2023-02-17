import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CategorieList } from "interfaces";
import { useRouter } from "next/router";
import { useDataContext } from "Context";

const drawerWidth = 240;

const SideNav = () => {
    const router = useRouter();
    const { parent } = router.query;
    const { categoriesList, setCurrentChild } = useDataContext();

    const handleRoute = (category: string, seo_friendly: string) => {
        setCurrentChild!(category);
        router.push(`/${parent}/${seo_friendly}`);
    };
    if (!parent) return null;
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {categoriesList?.map(
                        ({ category, seo_friendly }: CategorieList) => {
                            return (
                                <ListItem
                                    disablePadding
                                    key={`type-child-${category}`}
                                    onClick={() =>
                                        handleRoute(category, seo_friendly)
                                    }
                                >
                                    <ListItemButton>
                                        <ListItemText primary={category} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        }
                    )}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideNav;
