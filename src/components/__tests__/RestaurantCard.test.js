import { render, screen } from "@testing-library/react";
import RestaurantCard, { withTopRatedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import MOCK_DATA_TOP_RATED from "../mocks/restaurantCardMockTopRated.json";
import "@testing-library/jest-dom";

it("should render RetaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Swastik Food Zone");
  expect(name).toBeInTheDocument();
});

it("should not render RetaurantCard component with 'Top Rated' label", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const topRated = screen.queryByText("Top Rated");
  expect(topRated).toBeNull();
});

it("should render RetaurantCard component with 'Top Rated' label", () => {
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);
  render(<RestaurantCardTopRated resData={MOCK_DATA_TOP_RATED} />);

  const topRated = screen.getByText("Top Rated");
  expect(topRated).toBeInTheDocument();
});
