import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from '../home/home'
import Listing from '../restListing/listingApi'
import RestDetails from '../restDetails/restDetailsApi'

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/list/:id' component={Listing}/>
            <Route exact path='/rest/:id' component={RestDetails}/>
            
        </BrowserRouter>
        
        
            
        
    )
}
export default Routing;