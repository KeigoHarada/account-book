import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";

interface SideBarProps {
    drawerWidth: number;
    mobileOpen: boolean;
    handleDrawerTransitionEnd: () => void;
    handleDrawerClose: () => void;
}

interface menuItem {
    text: string;
    icon: React.ComponentType;
    path: string;
}

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose }: SideBarProps) => {

    const menuItems: menuItem[] = [
        { text: "Home", icon: HomeIcon, path: "/" },
        { text: "Report", icon: AssessmentIcon, path: "/report" }
    ];

    const activeLinkStyle: CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
    }
    const baseLinkStyle: CSSProperties = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} style={({ isActive }) => {
                        return {
                            ...baseLinkStyle,
                            ...(isActive ? activeLinkStyle : {})
                        }
                    }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div >
    );
    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default SideBar;