import React from "react";
import "./App.css";
import WhoWeAre from "./pages/whoweare";
import Services from "./pages/services";
import Projects from "./pages/projects";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import NavbarMenu from "./components/Navbar/Navbar";
import FooterPage from "./components/FooterPage";
import imageComponent from "./components/imageComponent";
function App() {
  return (
    <div>
      <NavbarMenu />
      <Home />
      <WhoWeAre />
      <Services />
      <imageComponent />
      <Projects />
      <ContactUs />
      <FooterPage />
    </div>

    /**<Router>
      <NavbarMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/whoweare" component={WhoWeAre} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
    </Router>**/
  );
}

export default App;
