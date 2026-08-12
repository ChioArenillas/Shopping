import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

import ShoppingListSection from '@/components/dashboard/ShoppingListSection';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />

      <Sidebar />

<Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    mt: '64px',
  }}
>
        <Typography variant="h4" component="h1">
          Good morning 👋
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Welcome to your shopping list:
        </Typography>

          <ShoppingListSection />
      </Box>
    </Box>
  );
}