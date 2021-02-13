import React, {useState, useCallback, useMemo} from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Child from './components/Child';

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

export default function App() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);

  // useCallback (actualFunctionToRemember, dependencyArray)
  // will always return same function refrence
  const memorizedCallback = useCallback(number => changeChildNumber(number), []);

  // remember value unless arr changed
  // eslint-disable-next-line
  const memorizedValue = useMemo( () => getLargestNumber(), [arr]);

  // if local number changed, the child should not rerender 
  function incrementLocal () {
    setLocalNumber(state => state + 1);
  }

  function changeChildNumber(number) {
    setChildNumber(number);
  }

  function getLargestNumber () {
    // if this show up, means function get called
    // if arr not changed, this function should not get called
    console.log("I am working");
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([60, 70, 80, 90]);
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {/* <Child number={childNumber} changeNumber={changeChildNumber}></Child> */}
        {/* use memoizedCallback to make sure always same refrence */}
        <Child number={childNumber} changeNumber={memorizedCallback}></Child>
      </Box>
      <Box my={4}>
        {/* if this button get clicked, the child should not rerender */}
        <button onClick={incrementLocal}>Click to increment local</button>
        <h1>local {localNumber} </h1>
      </Box>
      <Box my={4}>
        {/* <h1>Largest Number {getLargestNumber()} </h1> */}
        <h1>Largest Number {memorizedValue} </h1>
        <button onClick={changeArray}>Change Array</button>
      </Box>
    </Container>
  );
}
