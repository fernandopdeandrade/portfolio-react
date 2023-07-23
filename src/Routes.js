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
      <Route exact path="/portfolio-react" component={Home} />
      <Route path="/portfolio-react/about" component={About} />
      <Route path="/portfolio-react/contact" render={() => <Contact />} />
      <Route path="/portfolio-react/blog" component={Blog} />
      <Route path="/portfolio-react/projects" component={Projects} />
      <Route
        path="/portfolio-react/success_message"
        component={SuccessMessage}
      />
      <Route path="/portfolio-react/privacy_policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}
