import React, {Component} from 'react';
import ListingDisp from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

import axios from 'axios'
const listUrl = 'https://restaurantbackend1-5-21.herokuapp.com/restaurant?mealtype=';

class Listing extends Component{
    constructor(props){
        super(props)
            this.state= {
                listmeal:''
            
        }
    }
    handleCuisineFilters = (filtereddata) =>{
        this.setState({listmeal:filtereddata})
    }
    handleCostFilter = (filteredData) =>{
        this.setState({listmeal:filteredData})
    }
    render(){
        
        console.log(this.state.listmeal)
        return(
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-2'>
                        Cuisine Filter 
                        <hr/>
                        <CuisineFilter result = {(data) => this.handleCuisineFilters(data)} />
                        <br/>
                        <br/>
                        Cost Filter
                        <hr/>
                        <CostFilter cstresult = {(data) => this.handleCostFilter(data)} />
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


