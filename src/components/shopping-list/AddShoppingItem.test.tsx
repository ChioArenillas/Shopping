import { render, screen } from '@testing-library/react';

import AddShoppingItem from './AddShoppingItem';

describe('AddShoppingItem', () => {
  it('shows the product input and add button', () => {
    render(<AddShoppingItem onAdd={jest.fn()} />);

    expect(
      screen.getByRole('textbox', {
        name: 'Product',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: 'Add',
      }),
    ).toBeInTheDocument();
  });
});