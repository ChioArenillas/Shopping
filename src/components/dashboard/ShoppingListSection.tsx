'use client';

import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ShoppingList from '@/components/shopping-list/ShoppingList';
import { initialShoppingItems } from '@/components/shopping-list/data';
import SummaryCards from './SummaryCards';

export default function ShoppingListSection() {
  const [items, setItems] = useState(initialShoppingItems);
  const totalItems = items.length;

const completedItems = items.filter(
  (item) => item.completed,
).length;

const pendingItems = totalItems - completedItems;

  const handleToggle = (id: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  return (
    <>
    <SummaryCards
        total={totalItems}
        completed={completedItems}
        pending={pendingItems}
      />
    <Paper sx={{ mt: 3, p: 2 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2 }}
      >
        My list
      </Typography>

      <ShoppingList
        items={items}
        onToggle={handleToggle}
      />
    </Paper>
        </>

  );
}