import { screen, render } from "@testing-library/react";
import { Counter } from "./Counter";
import user from '@testing-library/user-event'

describe.only('Counter', () => {
    test('render correctly', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const inCrement = screen.getByRole('button', {
            name: 'Increment'
        })
    });

    test('render a count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0')
    });

    test('rendersa count of 1 after clicking the increment button', async () => {
        //user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });

        await user.dblClick(incrementButton);
        //await user.click(incrementButton);
        const countLement = screen.getByRole('heading');
        expect(countLement).toHaveTextContent('2')

    })
    test('renders a count of 10 after clicking the ste button', async () => {
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        await user.click(setButton)
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10')
    });

    test('elements are focused in the right order', async () => {
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });

        await user.tab();
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })

})