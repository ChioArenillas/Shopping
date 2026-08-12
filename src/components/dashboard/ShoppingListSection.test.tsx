import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShoppingListSection from "./ShoppingListSection";

describe("ShoppingListSection", () => {
  it("toggles an item when its checkbox is clicked", async () => {
    const user = userEvent.setup();

    render(<ShoppingListSection />);

    const milkCheckbox = screen.getByRole("checkbox", {
      name: "Check Milk as bought",
    });

    expect(milkCheckbox).not.toBeChecked();

    await user.click(milkCheckbox);

    expect(milkCheckbox).toBeChecked();
  });
  it('shows the shopping summary', () => {
  render(<ShoppingListSection />);

  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
});
});
