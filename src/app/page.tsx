import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

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
          mt: 8,
        }}
      >
        <Typography variant="h4" component="h1">
          Buenos días 👋
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Bienvenido a tu lista de la compra.
        </Typography>
      </Box>
    </Box>
  );
}