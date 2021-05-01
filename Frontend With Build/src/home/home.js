import React from 'react';
import Search from './search';
import QuickSearch from './quickSearchApi';

const Home = (props) =>{
   const sendTorest = (data) =>{
        props.history.push(`/rest/${data}`)
    }
    return(
        <React.Fragment>
            <Search Rid = {(data) => {sendTorest(data)}}/>
            <QuickSearch  />
        </React.Fragment>
    )
}
export default Home;