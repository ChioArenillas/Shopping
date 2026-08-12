import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShoppingItem from "./ShoppingItem";

describe("ShoppingItem", () => {
  const item = {
    id: 1,
    name: "Milk",
    quantity: 2,
    category: "Dairy",
    completed: false,
  };

  it("shows the product information", () => {
    const onToggle = jest.fn();

    render(<ShoppingItem item={item} onToggle={onToggle} />);

    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("2 units · Dairy")).toBeInTheDocument();
  });

  it("calls onToggle when the checkbox is clicked", async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();

    render(<ShoppingItem item={item} onToggle={onToggle} />);

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
  });
  it('shows the product as completed when it is bought', () => {
  const onToggle = jest.fn();

  render(
    <ShoppingItem
      item={{
        id: 1,
        name: 'Milk',
        quantity: 2,
        category: 'Dairy',
        completed: true,
      }}
      onToggle={onToggle}
    />,
  );

  expect(screen.getByRole('checkbox')).toBeChecked();

  expect(screen.getByText('Milk')).toHaveStyle({
    textDecoration: 'line-through',
  });
});

});
