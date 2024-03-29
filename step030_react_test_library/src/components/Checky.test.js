import React from "react";
import Checky from "./Checky";

import { fireEvent, render, screen, act, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

// code copied from: https://dev.to/lennythedev/testing-async-stuff-in-react-components-with-jest-and-react-testing-library-mag

describe.only("Checky", () => {
//     describe('act + mock timers', () => {
//         beforeAll(() => {
//             jest.useFakeTimers();
//         })

//         afterAll(() => {
//             jest.useRealTimers()
//         })

//         it("updates state with delay - act() + mock timers", async () => {
//             act(() => {
//                 render(<Checky />);
//             })

//             // screen.debug();
//             let label = screen.getByLabelText("false");
//             expect(label).toBeInTheDocument();

//             act(() => {
//                 fireEvent.click(label);
//                 jest.advanceTimersByTime(2000);
//             })

//             // screen.debug()
//             expect(screen.getByLabelText("true")).toBeInTheDocument();
//         });
//     });


    describe('async utils', () => {
        it("updates state with delay - RTL async utils", async () => {
            render(<Checky />);

            let label = await screen.findByLabelText("false")
            expect(label).toBeInTheDocument();

            // screen.debug();

            fireEvent.click(label);

            // expect(await screen.findByLabelText("true")).toBeInTheDocument();
            expect(await screen.findByLabelText("true", {}, { timeout: 2000 })).toBeInTheDocument();
            // await waitFor(() => screen.getByLabelText("true"), { timeout: 2000 });

            // screen.debug()
        });
    })
});
