import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// commom routes
import AddressBar from "./components/addressBar";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

// addon routes
import Home from "./Pages/HomePage/home";
import ExamResults from "./Pages/ExamResults/examResults";

function App() {
  return (
    <Router>
      <AddressBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examresults" element={<ExamResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
