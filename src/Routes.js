import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import SuccessMessage from "./pages/SuccessMessage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" render={() => <Contact />} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/success_message" component={SuccessMessage} />
      <Route exact path="/privacy_policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}
