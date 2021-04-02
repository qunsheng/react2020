import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

// users component
function Users (props) {
  return props.users.map( user => {
    let userInfo = `${user.name.title} ${user.name.first} ${user.name.last}`
    return <div key={user.email}>
      <p><img src={user.picture.medium} alt=""></img> {userInfo}</p>
    </div>
    })
}

function App () {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // let [apiData, setApiData] = useState('');
  const getUsersForPage = useRef(() => {}); // set ref.current = empty function

  //useRef is like a “box” that can hold a mutable value
  getUsersForPage.current =  () => {
    axios.get(`https://randomuser.me/api?page=${page}`).then( ( {data} ) => {
      if(data.results.length) {
        setUsers([...users, ...data.results]);
        // setApiData(JSON.stringify(data.results, '', 4));
      }
    }).catch( (err) => {
      console.log("api err: ", err)
    });
    setPage(page+1);
  }

  useEffect( () => {
    getUsersForPage.current(); // use getRef to avoid useEffect get called extra times
  }, [] );

  return (
    <div >
      <h1> User List </h1>
      <button onClick = {getUsersForPage.current}> Append next user page</button>
      < Users users={users} />
      {/* <p>
        <pre>
        {apiData}
        </pre>
      </p> */}
    </div>
  )
}

export default App;

// Q: what is wrong for the flowing code?
//  this.setState({
//       counter: this.state.counter + this.props.increment,
//   });
// A: React may batch multiple setState() calls into a single update for performance.
//    Because this.props and this.state may be updated asynchronously, 
//    you should not rely on their values for calculating the next state.
//    Corrent:
//    this.setState( (state, props) => ({
//       counter: state.counter + props.increment,
//    }));
// 

// Q: what is wrong for the flowing code?
// const Child = ({ familyName }) => {
//   return <p>{familyName}</p>
// }
// A: Do not use anonymous functions to construct React functional components,
//    because it become hard to test and debug
// 
