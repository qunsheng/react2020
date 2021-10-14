import React from "react";
import { render, cleanup, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import axiosMock from "axios";
import App from "./App";

afterEach(cleanup);

it("fetches and displays data", async () => {
    // We'll be explicit about what data Axios is to return when `get` is called.
    axiosMock.get.mockResolvedValueOnce({ 
        data: { 
            results: [
                {
                    cell: "0441-038-518",
                    email: "ethan.simmons@example.com",
                    gender: "male",
                    id: {name: 'TFN', value: '166627353'},
                    location: {},
                    name: {title: 'Mr', first: 'Ethan', last: 'Simmons'},
                    phone: "08-5807-4652",
                    picture: {
                        large: 'https://randomuser.me/api/portraits/men/3.jpg', 
                        medium: 'https://randomuser.me/api/portraits/med/men/3.jpg', 
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg'
                    }
                }
            ] 
        } 
    });
    // if multiple times: do the following
    // axiosMock.get.mockImplementation((url) => {
    //     if (url === 'www.example.com') {
    //         return Promise.resolve({ data: {...} });
    //     } else {
    //         //...
    //     }
    // });
  
    // Let's render our app component
    // the `getByTestId` function so we can find individual elements.
    const { getByTestId } = render( <App />);
  
    // On first render, we expect the "loading" span to be displayed
    expect(getByTestId("loading")).toHaveTextContent("Loading data...");
  
    // Because the useAxios call (useEffect) happens after initial render
    // We need to handle the async nature of an AJAX call by waiting for the
    // element to be rendered.
    const resolvedSpan = await waitFor (() => getByTestId("resolved"), { timeout: 3000 });

  
    // Now with the resolvedSpan in hand, we can ensure it has the correct content
    expect(resolvedSpan).toHaveTextContent("User List");
});