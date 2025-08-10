import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe.skip('Application', () => {
    test('render correctly', () => {
        render(<Application />);


        const pageheHeading = screen.getByRole('heading', {
            name: 'Job application form'
        })
        expect(pageheHeading).toBeInTheDocument();


        const pageheHeading2 = screen.getByRole('heading', {
            level: 2,
            name: 'Section 1'
        })
        expect(pageheHeading2).toBeInTheDocument();




        // const nameELement = screen.getByRole("textbox", {
        //     name: "Name"
        // });
        // expect(nameELement).toBeInTheDocument();


        // const bioELement = screen.getByRole("textbox", {
        //     name: "Bio"
        // });
        // expect(bioELement).toBeInTheDocument();


        // const jobLocation = screen.getByRole("combobox");
        // expect(jobLocation).toBeInTheDocument();

        // const termsElement = screen.getAllByRole("checkbox");
        // expect(termsElement).toBeInTheDocument();

        // const submitButton = screen.getAllByRole("button");
        // expect(submitButton).toBeInTheDocument();


        const element2 = screen.getByLabelText('I agree to the terms and conditions', {

        });
        expect(element2).toBeInTheDocument()


    })
})