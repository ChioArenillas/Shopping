import List from '@mui/material/List';

import ShoppingItem from './ShoppingItem';
import type { ShoppingItem as ShoppingItemType } from './types';

interface ShoppingListProps {
  items: ShoppingItemType[];
  onToggle: (id: number) => void;
}

export default function ShoppingList({
  items,
  onToggle,
}: ShoppingListProps) {
  return (
    <List>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
        />
      ))}
    </List>
  );
}