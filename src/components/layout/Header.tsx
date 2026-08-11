'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <ShoppingCartIcon sx={{ mr: 2 }} />

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Shopping List
        </Typography>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}