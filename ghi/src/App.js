import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LandingPage from "./LandingPage";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <div className="container">
          <Routes>
          <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
