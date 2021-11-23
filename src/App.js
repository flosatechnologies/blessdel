import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import WhoWeAre from "./pages/whoweare";
import Services from "./pages/services";
import Projects from "./pages/projects";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import NavbarMenu from "./components/Navbar/Navbar";
import FooterPage from "./components/FooterPage";
import ImageComponent from "./components/imageComponent";

function App() {
  return (
    <div>
      <Helmet>
        <title>Blessdel construction</title>
        <meta
          name="description"
          content="blessdel construction have very experienced
          and seasoned staff in the various fields of specialties such
          as Architects, Surveyors, Builders, Civil, Electrical and
          Plumbing Engineers."
        />
        <meta
          name="keywords"
          content="Blessdel, bless, construction, design, cctv, electric fence, civil engineering"
        />
      </Helmet>
      <NavbarMenu />
      <Home />
      <WhoWeAre />
      <Services />
      <ImageComponent />
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
