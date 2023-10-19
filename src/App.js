import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import translations from "./features/language/translations/translations.js";
import "./styles/bg.css";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [locale, setLocale] = useState("de"); // state for current locale

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };

  const messages = translations[locale];
  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <div className="bg">
          <Navigation />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quotes" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
        <Container>
          <Footer onChangeHandler={handleLanguageChange} />
        </Container>
      </IntlProvider>
    </>
  );
}

export default App;
