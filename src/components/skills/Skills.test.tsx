
import { screen, render } from "@testing-library/react";
import Skills from "./Skills";



describe('Skills', () => {
    const skills = ['html', 'css', 'js']
    test('render the component', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument()
    });

    test('render a list of skills', () => {
        render(<Skills skills={skills} />);
        const listElements = screen.getAllByRole('listitem');
        expect(listElements).toHaveLength(skills.length)
    });


    test('render Login button', () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument()
    })
    test('Start learn button not rendered button', () => {
        render(<Skills skills={skills} />);
        const StartLearningButton = screen.queryByRole('button', {
            name: 'Learning',
        });
        expect(StartLearningButton).not.toBeInTheDocument()
    })

    test('Start learning is evetually displayed', async () => {
        render(<Skills skills={skills} />);
        // screen.debug()
        const startlearning = await screen.findByRole('button', {
            name: 'Learning',
        }, {
            timeout: 2000
        });
        //screen.debug()
        expect(startlearning).toBeInTheDocument()
    })
})