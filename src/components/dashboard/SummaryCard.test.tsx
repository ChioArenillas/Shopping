import { render, screen } from '@testing-library/react';

import SummaryCard from './SummaryCard';

describe('SummaryCard', () => {
  it('shows the value and title', () => {
    render(
      <SummaryCard
        title="Productos"
        value={12}
      />,
    );

    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
  });
});