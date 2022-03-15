import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;
const DivDrawer = styled("div")(({ theme }) => ({
  marginTop: "10px",
}));

function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <DivDrawer>
      {/* <Toolbar />
      <Divider /> */}
      <List>
        {[
          { id: 1, text: "Explore", Icon: ExploreOutlinedIcon },
          { id: 2, text: "Liked", Icon: ThumbUpOutlinedIcon },
          { id: 3, text: "Watch Later", Icon: WatchLaterOutlinedIcon },
          { id: 4, text: "History", Icon: HistoryOutlinedIcon },
        ].map((val, index) => {
          const Icon = val.Icon;
          return (
            <span key={index}>
              <Divider />
              <ListItem button key={val.text}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={val.text} />
              </ListItem>
            </span>
          );
        })}
      </List>
      <Divider />
    </DivDrawer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          marginTop: "70px",
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          marginTop: "70px",
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
