import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from '../home/home'
import Listing from '../restListing/listingApi'
import RestDetails from '../restDetails/restDetailsApi'
import Forms from '../Orders/forms';
import Orders from '../Orders/ordersApi';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/list/:id' component={Listing}/>
            <Route exact path='/rest/:id' component={RestDetails}/>
            <Route exact path='/orders/:id' component={Forms}/>
            <Route exact path='/vieworder' component={Orders}/>
            
        </BrowserRouter>
        
        
            
        
    )
}
export default Routing;