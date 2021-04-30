import React,{Component} from 'react';
import OrderDisplay from './ordersDisplay';
import axios from 'axios';
const ourl = "http://localhost:7500/orders";

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