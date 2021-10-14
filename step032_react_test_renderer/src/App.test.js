import React from "react";
import renderer from 'react-test-renderer';
import App from './App';
import UserData from './UserData';

function defer() {
    let res, rej;
    let promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
}
it('should render app with loading message', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render a single user', async () => {
    const dataObj = new UserData();
    const deferredData = defer();
    let component; 
    deferredData.resolve({ 
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
    });
    dataObj.readData = () => deferredData;
    await renderer.act ( async () => {
        component = renderer.create(<App dataObj={dataObj} />)
    })
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
