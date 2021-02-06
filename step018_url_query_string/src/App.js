import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import queryString from 'query-string';

// function create history/query object, used by both updateUrl and getUrlObj
function getQueryContainer() {
  let browserHistory = createBrowserHistory();
  let query = queryString.parse (browserHistory.location.search);
  return {browserHistory, query};
}

// update url using query object
function updateUrl(qpueryObject) {
  let {browserHistory, query} = getQueryContainer();
  query = {...query, ...qpueryObject};
  let pathString = `${browserHistory.location.pathname}?${queryString.stringify(query)}`;
  browserHistory.push(pathString);
}

// get url query object
function getUrlQueryObj () {
  let {query} = getQueryContainer();
  return query;
}

export default function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React App example
          </Typography>
        </Box>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  {/* 
                  Option to  use NavLink.
                  The <NavLink> component is similar to the <Link> component, except that 
                  several props can be specified that help you to conditionally add styling 
                  attributes to the rendered element.
                   */}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  // get query object
  let query = getUrlQueryObj ();
  // update url
  updateUrl({firstName: "Quentin", lastName: "Chen"});
  return <h2>Users</h2>;
}
