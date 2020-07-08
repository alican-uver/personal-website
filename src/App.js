import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavBar from "./components/Navbar/NavBar";
import ScrollToTop from './components/ScrollToTop';

/* Pages */
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  }
];

function App() {
  return (
    <ScrollToTop>
      <NavBar />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <Component />
            </CSSTransition>
          )}
        </Route>
      ))}
      <Footer />
    </ScrollToTop>
  );
}

export default App;