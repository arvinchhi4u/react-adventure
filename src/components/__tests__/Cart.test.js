import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  // confirm the cart has 0 items
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  // find header, expand the accordion by clicking on it
  const accordionHeader = screen.getByText("FARALI SPECIAL (4)");
  fireEvent.click(accordionHeader);

  // confirm the number of food items inside accordion
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(4);

  // find and click on first "Add +" button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // confirm the cart string in header is updated
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  // click on second "Add +" button
  fireEvent.click(addBtns[0]);

  // confirm the cart string in header is updated
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  // confirm number of food items in cart
  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  // clear the cart
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  // confirm the cart is empty
  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  // confirm the "cart is empty" message is visible
  expect(
    screen.getByText("Your cart is empty! Please add items to the cart!")
  ).toBeInTheDocument();

  // confirm the cart string in header is updated
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
});
