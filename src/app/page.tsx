import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <Typography variant="h1">
        Shopping List
      </Typography>

      <Typography variant="body1">
        Mi lista de la compra
      </Typography>

      <Button variant="contained">
        Añadir producto
      </Button>
    </main>
  );
}