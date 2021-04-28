import React from 'react';
import Search from './search';
import QuickSearch from './quickSearchApi';

const Home = () =>{
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}
export default Home;