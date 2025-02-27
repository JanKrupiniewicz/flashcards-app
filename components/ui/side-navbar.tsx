import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { auth } from "@/lib/auth";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import DnsIcon from "@mui/icons-material/Dns";
import ListItemSignOut from "../list-item-sign-out";
import AddIcon from "@mui/icons-material/Add";
import { ProfileDisplay } from "./profile-display";
import { Divider } from "@mui/material";

const SideNavbar = async () => {
  const session = await auth();

  return (
    <Box sx={{ width: 250, backgroundColor: "" }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/" passHref>
              <ListItemText primary={"Home"} />
            </Link>
          </ListItemButton>
        </ListItem>
        {session?.user ? (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemSignOut />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <Link href="/add-flashcard-set" passHref>
                  <ListItemText primary={"New Set"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DnsIcon />
                </ListItemIcon>
                <Link href="/discover" passHref>
                  <ListItemText primary={"Flashcards"} />
                </Link>
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <Link href="/sign-up" passHref>
                  <ListItemText primary={"Sign Up"} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <Link href="/sign-in" passHref>
                  <ListItemText primary={"Sign In"} />
                </Link>
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>

      <Divider />
      {session?.user && <ProfileDisplay user={session.user} />}
    </Box>
  );
};

export default SideNavbar;
