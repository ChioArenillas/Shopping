import Box from '@mui/material/Box';

import SummaryCard from './SummaryCard';

export default function SummaryCards() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
        },
        gap: 2,
      }}
    >
      <SummaryCard
        title="Productos"
        value={12}
      />

      <SummaryCard
        title="Comprados"
        value={5}
      />
    </Box>
  );
}