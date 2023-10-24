import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import UserHome from "./users/UserHome";
import LoginForm from "./users/LoginForm";
import SignUpForm from "./users/Signup";
import CreateActivityForm from "./activities/CreateActivityForm";
import ActivitySurveyForm from "./activities/ActivitySurveyForm";
import UserProfile from "./users/UserProfile";
import ActivityDrafts from "./activities/ActivityDrafts";
import SingleUserFavorites from "./favorites/SingleUserFavorites";

function App() {
  const domain = /https:\/\/[^/]+/
  const basename=process.env.PUBLIC_URL.replace(domain, "")

  return (
    <BrowserRouter basename={basename}>
      <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
        <Nav />

        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/favorites" element={<SingleUserFavorites />} />
            <Route path="/create" index element={<CreateActivityForm />} />
            <Route path="/activities/filtered" element={<ActivitySurveyForm/>} />
            <Route path="/user">
              <Route index element={<UserProfile />} />
            </Route>
            <Route path="/activities/drafts" element={<ActivityDrafts />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
