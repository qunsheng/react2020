import React, {useEffect, useRef} from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Input from './components/Input'; // example of forwardRef

export default function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  // use useEffect to know when page finish loading
  useEffect(() => {
    // ref.current hold current ref
    firstNameRef.current.focus();
  }, []);

  function firstKeyDown(e) {
    if(e.key === 'Enter') {
      // focus to last name
      lastNameRef.current.focus();
    }
  }

  function lastKeyDown(e) {
    if(e.key === 'Enter') {
      // focus to submit
      submitRef.current.focus();
    }
  }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {/* need focus this input first */}
        {/* <input type="text" ref={firstNameRef} onKeyDown={firstKeyDown} placeholder="enter first name"></input> */}
        <Input type="text" ref={firstNameRef} onKeyDown={firstKeyDown} placeholder="enter first name" />
      </Box>
      <Box my={4}>
        {/* need focus this input after first name */}
        {/* <input type="text" ref={lastNameRef}  onKeyDown={lastKeyDown} placeholder="enter last name"></input> */}
        <Input type="text" ref={lastNameRef}  onKeyDown={lastKeyDown} placeholder="enter last name" />
      </Box>
      <Box my={4}>
         {/* need focus submit after last name */}
        <button ref={submitRef}>submit</button>
      </Box>
    </Container>
  );
}
