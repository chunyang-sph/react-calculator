import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalcBody from "./calcbody";
import CalculateProvider from "../../provider/calculateProvider";

describe("When clicked, calculator digits render on screen", () => {
  test("1234567890", async () => {
    // Given blank calculator screen and state
    render(
      <CalculateProvider>
        <CalcBody />
      </CalculateProvider>
    );

    // When we press buttons 1 through 0
    const button1 = screen.getByText("1");
    const button2 = screen.getByText("2");
    const button3 = screen.getByText("3");
    const button4 = screen.getByText("4");
    const button5 = screen.getByText("5");
    const button6 = screen.getByText("6");
    const button7 = screen.getByText("7");
    const button8 = screen.getByText("8");
    const button9 = screen.getByText("9");
    const button0 = screen.getByText("0");
    await act(() => {
      userEvent.click(button1);
      userEvent.click(button2);
      userEvent.click(button3);
      userEvent.click(button4);
      userEvent.click(button5);
      userEvent.click(button6);
      userEvent.click(button7);
      userEvent.click(button8);
      userEvent.click(button9);
      userEvent.click(button0);
    });

    // Then digits 1 through 0 appear on the screen
    const calcScreen = screen.getByTestId("screen");
    expect(calcScreen).toHaveTextContent("1234567890");
  });
});
