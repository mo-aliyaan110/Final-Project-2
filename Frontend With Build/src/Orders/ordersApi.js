import React,{Component} from 'react';
import OrderDisplay from './ordersDisplay';
import axios from 'axios';
const ourl = "https://restaurantbackend1-5-21.herokuapp.com/orders";

class Orders extends Component{
    constructor(){
        super()
        this.state = {
            orders:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <OrderDisplay orderdata = {this.state.orders} />
            </React.Fragment>
        )
    }
    async componentDidMount(){
         const response = await axios.get(`${ourl}`)
         this.setState({orders:response.data})
     }
}
export default Orders;