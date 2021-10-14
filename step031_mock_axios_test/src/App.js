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
  const getUsersForPage = useRef(() => {}); // set ref.current = empty function

  //useRef is like a “box” that can hold a mutable value
  getUsersForPage.current =  () => {
    axios.get(`https://randomuser.me/api?page=${page}`).then( ( {data} ) => {
      if(data.results.length) {
        setUsers([...users, ...data.results]);
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
      <p></p>
      {users.length === 0 ? <span data-testid="loading">Loading data...</span> :
      <div>
        <h1 data-testid="resolved"> User List </h1>
        <button onClick = {getUsersForPage.current}> Append next user page</button>
        < Users users={users} />
      </div>}
    </div>
  )
}

export default App;