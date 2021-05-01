import React,{Component} from 'react';
import axios from 'axios';
const cFilterurl = "https://restaurantbackend1-5-21.herokuapp.com/restaurantlist/"


class CuisineFilter extends Component{
    constructor(){
        super()
        this.state = {
            cuisineFilData:''        
        }
    }
    handleCuisine = (event) =>{
       let cuisineType = event.target.value;
       let mealtype = sessionStorage.getItem('address')
        let curl;
        if(cuisineType === '' || cuisineType === ""){
            curl = `${cFilterurl}${mealtype}`
        }
        else{
            curl = `${cFilterurl}${mealtype}?cuisine=${cuisineType}`;
        }
        axios.get(curl)
        .then((res) => this.props.result(res.data))
    }
    
    render(){
        
        return(
            <React.Fragment>
                <div onChange={this.handleCuisine} >

                    <label className='radio'>
                        <input type="radio" value='' name="cuisine" /> All
                    </label>
                    <label className='radio'>
                        <input type="radio" value='1' name="cuisine" /> North Indian
                    </label>
                    <label className='radio'>
                        <input type="radio" value='2' name="cuisine" /> South Indian
                    </label>
                    <label className='radio'>
                        <input type="radio" value='3' name="cuisine" /> Chinese
                    </label>
                    <label className='radio'>
                        <input type="radio" value='4' name="cuisine" /> Fast Food
                    </label>
                    <label className='radio'>
                        <input type="radio" value='5' name="cuisine" /> Street Food
                    </label>
                    
                </div>
            </React.Fragment>
        )
    }
}
export default CuisineFilter;