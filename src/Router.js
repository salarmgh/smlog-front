import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Home from "./layout/Home";
import Post from "./layout/Post";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/post/:slug/">
            <BlogPage component={Post} />
          </Route>
          <Route path="/">
            <BlogPage component={Home} />
          </Route>
        </Switch>
    </Router>
  );
}
