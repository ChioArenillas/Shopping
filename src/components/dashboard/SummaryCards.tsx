import Box from '@mui/material/Box';

import SummaryCard from './SummaryCard';

interface SummaryCardsProps {
  total: number;
  completed: number;
  pending: number;
}

export default function SummaryCards({
  total,
  completed,
  pending,
}: SummaryCardsProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(3, 1fr)',
        },
        gap: 2,
      }}
    >
      <SummaryCard
        title="Products"
        value={total}
      />

      <SummaryCard
        title="Bought"
        value={completed}
      />

      <SummaryCard
        title="Pending"
        value={pending}
      />
    </Box>
  );
}