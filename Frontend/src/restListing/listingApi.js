import React, {Component} from 'react';
import ListingDisp from './listingDisplay';

import axios from 'axios'
const listUrl = 'http://localhost:7500/restaurant?mealtype=';

class Listing extends Component{
    constructor(props){
        super(props)
            this.state= {
                listmeal:''
            
        }
    }
    render(){
        console.log(this.props.match.params.id)
        console.log(this.state.listmeal)
        return(
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-2'>
                        Filters here
                    </div>
                    <div className='col-lg-10'>
                        

                        <ListingDisp listdata = {this.state.listmeal}/>
                    </div>
                </div>

            </React.Fragment>
        )
    }
    componentDidMount(){
        var mealId = this.props.match.params.id;
        sessionStorage.setItem('address', mealId);
        axios.get(`${listUrl}${mealId}`)
        .then((res)=> {this.setState({listmeal:res.data})})

    }
}
export default Listing;


