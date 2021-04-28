import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from '../home/home'
import Listing from '../restListing/listingApi'

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/list/:id' component={Listing}/>
        </BrowserRouter>
        
        
            
        
    )
}
export default Routing;