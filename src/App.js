import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Navigation />
        </Row>
      </Container>
      <Container style={{ padding: "60px 0 60px 0" }}>
        <Row>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Row>
      </Container>
      <Container>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
