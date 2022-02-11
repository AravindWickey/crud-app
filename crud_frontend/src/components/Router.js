import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App'
import form from "./form";
import AppOne from '../AppOne';
import AppTwo from '../AppTwo';



function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    
                        <Route exact path="/" component={AppOne} />
                        <Route exact path="/add" component={form}/>
                        <Route exact path="/Edit" component={App}/>
                        <Route exact path="/Delete" component={AppTwo}/>
                    
                </BrowserRouter>
            </div>
        </>
    )
}
export default RouterComponent;