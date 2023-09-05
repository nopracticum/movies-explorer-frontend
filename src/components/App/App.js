import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App() {
  const location = useLocation();
  useEffect(()=> {
    document.documentElement.setAttribute('lang','ru')
},[])
  const showHeaderFooter = (pathname) => {
    if ((pathname === "/") ||( pathname === "/movies") ||( pathname === "/saved-movies")||( pathname === "/profile")) {
      return true;
    }
    return false;
  };
  const renderHeaderAndFooter = showHeaderFooter(location.pathname);
  return (
    <div className="App">
      {renderHeaderAndFooter ? <Header/> : ''}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {renderHeaderAndFooter && !(location.pathname==='/profile') ? <Footer/> : ''}
    </div>
  );
}
export default App;
