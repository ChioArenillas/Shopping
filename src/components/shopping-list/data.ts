import type { ShoppingItem } from './types';

export const initialShoppingItems: ShoppingItem[] = [
  {
    id: 1,
    name: 'Milk',
    quantity: 2,
    category: 'Lácteos',
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
    category: 'Lácteos',
    completed: true,
  },
  {
    id: 4,
    name: 'Tomatoes',
    quantity: 6,
    category: 'Fruits & Vegetables',
    completed: false,
  },
];