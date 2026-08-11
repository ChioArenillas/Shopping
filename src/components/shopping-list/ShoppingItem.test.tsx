import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShoppingItem from "./ShoppingItem";

describe("ShoppingItem", () => {
  const item = {
    id: 1,
    name: "Leche",
    quantity: 2,
    category: "Lácteos",
    completed: false,
  };

  it("shows the product information", () => {
    const onToggle = jest.fn();

    render(<ShoppingItem item={item} onToggle={onToggle} />);

    expect(screen.getByText("Leche")).toBeInTheDocument();
    expect(screen.getByText("2 unidades · Lácteos")).toBeInTheDocument();
  });

  it("calls onToggle when the checkbox is clicked", async () => {
    const user = userEvent.setup();
    const onToggle = jest.fn();

    render(<ShoppingItem item={item} onToggle={onToggle} />);

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
