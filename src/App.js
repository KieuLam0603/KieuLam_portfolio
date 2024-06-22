import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Kieu Lam's portfolio</title>
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
