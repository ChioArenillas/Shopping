'use client';

import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface AddShoppingItemProps {
  onAdd: (name: string) => void;
}

export default function AddShoppingItem({
  onAdd,
}: AddShoppingItemProps) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      return;
    }

    onAdd(name.trim());
    setName('');
  };

  return (
    <>
      <TextField
        label="Product"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </>
  );
}