import "./App.css";
import WhoWeAreSection from "./components/WhoWeAreSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <WhoWeAreSection />
      </Container>
    </div>
  );
}

export default App;
