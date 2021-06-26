import React from "react";
import { BrowserRouter as Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import SignUp from "./signUp";
import Page from "./Page";
import Fav from "./Fav";
import About from "./About";
import Home from "./Home";
import FileUpload from "./FileUpload";

function Routes(){
    return <Switch>
            <Route path="/" exact>
                <Header />
                <Home />
                <Footer />
             </Route>  
            <Route path="/signUp" exact>
                <Header />
                <SignUp />
                <Footer />
            </Route>
            {/* <Route path="/homepage" exact>
                <Header />
                <Home />
                <Footer />
            </Route> */}
            <Route path="/favpage" exact>
                <Header />
                <Fav />
                <Footer />
            </Route>
            <Route path="/about" exact>
                <Header />
                <About />
                <Footer />
            </Route>
            <Route path="/login" exact>
            <Header />
            <Login />
            <Footer />
            </Route>
            <Route path="/page" exact>
            <Header />
            <Page/>
            <Footer />
            </Route>
            <Route path="/fileupload" exact>
            <Header />
            <FileUpload/>
            <Footer />
            </Route>
            </Switch>
}

export default Routes;