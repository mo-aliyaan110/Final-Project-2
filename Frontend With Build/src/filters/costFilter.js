import axios from 'axios';
import React,{Component} from 'react';

const curl = "https://restaurantbackend1-5-21.herokuapp.com/restaurantlist/"

class CostFilter extends Component{
    constructor(){
        super()
        this.state = {
            costData:''
        }
    }
    handleCost = (event) =>{
       let cost = (event.target.value).split(',');
       let lcost = cost[0];
       let hcost = cost[1];
        let mealtype = sessionStorage.getItem('address');
        let costurl;
        if(cost === ''){
            costurl = `${curl}${mealtype}`
        }
        else{
            costurl = `${curl}${mealtype}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costurl)
        .then((res) => this.props.cstresult(res.data))
    }
    
    render(){
        
        return(
            <React.Fragment>
                <div onChange = {this.handleCost}>
                    <label className='radio'>
                        <input type='radio' name='cost' value=''/>All
                    </label>
                    <label className='radio'>
                        <input type='radio' name='cost' value='200,300'/>200-300
                    </label>
                    <label className='radio'>
                        <input type='radio' name='cost' value='301,400'/>301-400
                    </label>
                    <label className='radio'>
                        <input type='radio' name='cost' value='401,500'/>401-500
                    </label>
                    <label className='radio'>
                        <input type='radio' name='cost' value='501,600'/>501-600
                    </label>
                    
                </div>
            </React.Fragment>
        )
    
    }    
}
export default CostFilter;