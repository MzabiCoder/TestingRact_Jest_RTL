import { render, screen } from "@testing-library/react"
import { Greed } from "./greed"


test('greed redners correctly', () => {
    render(<Greed />);
    const testElemnt = screen.getByText('Hello');
    expect(testElemnt).toBeInTheDocument()
});

test('Greetd renders with a name', () => {
    render(<Greed name="Nabil" />);
    const textElement = screen.getByText('Hello Nabil');
    expect(textElement).toBeInTheDocument()
})