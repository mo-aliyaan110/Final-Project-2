import React from 'react';
import ReactDom from 'react-dom';
import Routing from './components/routing';
const App = () =>{
    return(
        <React.Fragment>
            <Routing/>
            
        </React.Fragment>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))