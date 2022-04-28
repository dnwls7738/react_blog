import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import View from "./pages/view/View";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
