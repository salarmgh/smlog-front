import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Home from "./layout/Home";
import Post from "./layout/Post";
import Search from "./layout/Search";
import Category from "./layout/Category";
import Page from "./layout/Page";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/page/:slug/">
            <BlogPage component={Page} />
          </Route>
          <Route path="/category/:category/">
            <BlogPage component={Category} />
          </Route>
          <Route path="/search">
            <BlogPage component={Search} />
          </Route>
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
