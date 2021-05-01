import React,{Component} from 'react';
import './search.css';

const lurl = "https://restaurantbackend1-5-21.herokuapp.com/location";
const restUrl = "https://restaurantbackend1-5-21.herokuapp.com/restaurant?city=";

class Search extends Component{
    constructor(){
        super()
        this.state={
            city:'',
            restaurant:''
        }
    }
    renderCity = (data) =>{
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.city}> 
                    {item.city_name} - {item.name}
                    </option>
                )
            })
        }
    }
    handleCity = (event) =>{
        console.log(event.target.value)
        fetch((`${restUrl}${event.target.value}`), {method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({restaurant:data})
        })
    }
    
    
    renderRestaurant = (data) =>{
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item._id}>
                        {item.name} || {item.locality}
                    </option>
                )
            })
        }
    }
    restValue = (event) =>{
        this.props.Rid(event.target.value)
    }

      
      
        
            

        
    render(){

        return(
            <React.Fragment>
                 <div>
            <div className="container">
                <div className="imageContainer">
            <div id="logo">
                <b className='logoText'>D</b><b className='logoTextZ'>Z</b>
            </div>
            <div className="hey">
                {/* Select the Restaurants on the basis of City */}
            </div>
            <div class="locationSelector">
                <select class="locationDropDown" onChange={this.handleCity}>
                    {/* this onChange event calls handleCity function */}
                    
                    <option> ------Select City------- </option>
                    {/* Function to see all cities */}
                    {this.renderCity(this.state.city)}
                    
                </select>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;

                <select className='locationDropDown' onChange = {this.restValue} >
                    <option>-----Get The Restaurants-----</option>
                    {this.renderRestaurant(this.state.restaurant)}
                </select>
               
            </div>
        </div>
        </div>
        </div>

            </React.Fragment>
        )
    }
    componentDidMount(){
        fetch(lurl, {method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({city:data})
        })

    }
}
export default Search;