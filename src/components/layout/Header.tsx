'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>


        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Shopping List
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <AccountCircleIcon />

          <Typography variant="body1">
            Chio
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}