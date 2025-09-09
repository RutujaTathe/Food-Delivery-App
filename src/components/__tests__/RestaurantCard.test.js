import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

it("should render restauarant component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});
