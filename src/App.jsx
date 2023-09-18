import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
