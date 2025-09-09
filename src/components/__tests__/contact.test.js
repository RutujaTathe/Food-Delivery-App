import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page test case", () => {
  beforeAll(() => {
    console.log("before running all test cases function execited");
  });
  beforeEach(() => {
    console.log("before each test cases function executed");
  });
  afterAll(() => {
    console.log("called after all the test cases");
  });
  afterEach(() => {
    console.log("after each test case executed.");
  });
  test("Should load contact us component", () => {
    render(<ContactUs />);
    //find heading
    const heading = screen.getByRole("heading");
    //check whether the heading is present or not
    expect(heading).toBeInTheDocument();
  });

  test("Should submit button present in contact page", () => {
    render(<ContactUs />);
    const button = screen.getByText("Submit");
    // const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should input placeholder text present in contact page", () => {
    render(<ContactUs />);
    const name = screen.getByPlaceholderText("Name");
    // const button = screen.getByRole("button");

    expect(name).toBeInTheDocument();
  });
  test("should load 2 input boxes inside contact us page", () => {
    render(<ContactUs />);
    const inputboxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputboxes.length).toBe(2);
  });
});
