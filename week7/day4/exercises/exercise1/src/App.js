import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

const HomeScreen = () => <h2 className="text-center mt-5">Welcome to Home</h2>;
const ProfileScreen = () => <h2 className="text-center mt-5">User Profile</h2>;
const ShopScreen = () => {
  throw new Error("Error in Shop Page");
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              MyApp
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop" className="nav-link">Shop</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
