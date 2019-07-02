import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/common/header';
import Home from '../components/home/home.container';

export default function RouteComponent() {
  return (
    <>
      <Header title='Xebia Assignment' />
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}