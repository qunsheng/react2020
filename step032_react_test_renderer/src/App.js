import React, {useState, useEffect, useRef} from "react";
import UserData from './UserData';

// users component
function Users (props) {
  return props.users.map( user => {
    let userInfo = `${user.name.title} ${user.name.first} ${user.name.last}`
    return <div key={user.email}>
      <p><img src={user.picture.medium} alt=""></img> {userInfo}</p>
    </div>
    })
}

function App (props) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const getUsersForPage = useRef(() => {});

  // test can pass resolved data through props.dataObj
  const dataObj = props.dataObj || new UserData();

  getUsersForPage.current =  () => {
    dataObj.readData(page).then( data => {
      if(data && data.results && data.results.length) {
        setUsers([...users, ...data.results]);
      }
    }).catch( (err) => {
      console.log("api err: ", err)
    });
    setPage(page+1);
  }

  useEffect( () => {
    getUsersForPage.current();
  }, [] );

  return (
    <div>
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