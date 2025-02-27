import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { User } from "next-auth";

const ProfileDisplay = ({ user }: { user: User }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center", p: 1 }}>
      {user.image ? <Avatar src={user.image} /> : <Avatar>{user.name}</Avatar>}
      <Stack>
        <Typography variant="body1">{user.name}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {user.email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export { ProfileDisplay };
