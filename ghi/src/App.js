import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import LandingPage from "./LandingPage";
import Nav from "./Nav";
import LoginForm from "./users/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
        <Nav />
        <div className="container">
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
