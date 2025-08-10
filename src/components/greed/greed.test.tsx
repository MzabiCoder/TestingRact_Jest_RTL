import { render, screen } from "@testing-library/react"
import { Greed } from "./Greed"


describe('Greed', () => {
    test('redners correctly', () => {
        render(<Greed />);
        const testElemnt = screen.getByText('Hello');
        expect(testElemnt).toBeInTheDocument()
    });

    test('Grenders with a name', () => {
        render(<Greed name="Nabil" />);
        const textElement = screen.getByText('Hello Nabil');
        expect(textElement).toBeInTheDocument()
    })
})