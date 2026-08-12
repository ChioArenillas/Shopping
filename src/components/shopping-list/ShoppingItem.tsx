"use client";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import type { ShoppingItem as ShoppingItemType } from "./types";

interface ShoppingItemProps {
  item: ShoppingItemType;
  onToggle: (id: number) => void;
}

export default function ShoppingItem({ item, onToggle }: ShoppingItemProps) {
  return (
    <ListItem>
      <Checkbox
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        slotProps={{
          input: {
            "aria-label": `Check ${item.name} as bought`,
          },
        }}
      />
      <ListItemText
        primary={item.name}
        secondary={`${item.quantity} units · ${item.category}`}
        slotProps={{
          primary: {
            sx: {
              textDecoration: item.completed ? "line-through" : "none",
            },
          },
        }}
      />{" "}
    </ListItem>
  );
}
