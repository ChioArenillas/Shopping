import { render, screen } from '@testing-library/react';

import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  const items = [
    {
      id: 1,
      name: 'Milk',
      quantity: 2,
      category: 'Dairy',
      completed: false,
    },
    {
      id: 2,
      name: 'Bread',
      quantity: 1,
      category: 'Bakery',
      completed: false,
    },
    {
      id: 3,
      name: 'Eggs',
      quantity: 12,
      category: 'Dairy',
      completed: true,
    },
  ];

  it('shows all shopping items', () => {
    const onToggle = jest.fn();

    render(
      <ShoppingList
        items={items}
        onToggle={onToggle}
      />,
    );

    expect(screen.getByText('Milk')).toBeInTheDocument();
    expect(screen.getByText('Bread')).toBeInTheDocument();
    expect(screen.getByText('Eggs')).toBeInTheDocument();
  });
});