import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import translations from "./translations/translations";
function App() {
  const [locale, setLocale] = useState("de"); // state for current locale

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };

  const messages = translations[locale];
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Container>
        <Row>
          <Navigation onChangeHandler={handleLanguageChange} />
        </Row>
      </Container>
      <Container style={{ padding: "100px 0 60px 0" }}>
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
    </IntlProvider>
  );
}

export default App;
