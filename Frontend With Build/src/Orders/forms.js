import React,{Component} from 'react';
import axios from 'axios';
import './forms.css'
import { Link } from 'react-router-dom';


const rdetailsUrl = "https://restaurantbackend1-5-21.herokuapp.com/restaurantdetails/";
const placeUrl = "https://restaurantbackend1-5-21.herokuapp.com/placeorder";



class Forms extends Component{
    constructor(props){
        super(props)
        this.state = {
            order_id: Math.floor(Math.random()*10000),
            Name:'',
            Restaurant_Name:'',
            Phone:'',
            Email:'',
            Persons:''
        }
    }
    handleName = (event) =>{
        this.setState({Name:event.target.value})
    }
    handlePhone = (event) =>{
        this.setState({Phone:event.target.value})
    }
    handleEmail = (event) =>{
        this.setState({Email:event.target.value})
    }
    handlePersons = (event) =>{
        this.setState({Persons:event.target.value})
    }
    sendData = () =>{
        var data = {
            order_id: this.state.order_id,
            Name:this.state.Name,
            Restaurant_Name:this.state.Restaurant_Name,
            Phone:this.state.Phone,
            Email:this.state.Email,
            Persons:this.state.Persons

        }
        fetch(placeUrl, 
            {method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/vieworder'))
    }
    render(){
        console.log(this.data)
        
        return(
          
                <React.Fragment>
                    <form>
                    
                        <div className="form-group">
                            <label className="control-label" /> Order id
                            <input className="form-control" disabled type='text' name='order_id' value={this.state.order_id} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" /> Restaurant
                            <input className="form-control" type='text' name='Restaurant_Name' disabled value={this.state.Restaurant_Name} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" /> Name
                            <input className="form-control"  type='text' name='Name' onChange={this.handleName} value={this.state.Name} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" /> Phone
                            <input className="form-control" type='number' name='Phone' onChange={this.handlePhone} value={this.state.Phone}  />
                        </div>
                        <div className="form-group">
                            <label className="control-label" /> Email
                            <input type="email" className="form-control"  name='Email' onChange={this.handleEmail} value={this.state.Email}  />
                        </div>
                        <div className="form-group">
                        <label className="control-label" /> Persons
                            <select style={{width:70}} className="form-control" name='Persons' onChange={this.handlePersons} value={this.state.Persons} >
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                        </div>
                        <Link to={`/rest/${this.props.match.params.id}`} className="btn btn-danger cancelbtn"> Cancel </Link>
                        <div onClick={this.sendData} className='btn btn-success'>
                            Placeorder
                        </div>
                    </form>
                </React.Fragment>
               
                

                
                
            
        )
    }
    async componentDidMount(){
        let restId = this.props.match.params.id;
        const response = await axios.get(`${rdetailsUrl}${restId}`)
        this.setState({Restaurant_Name:response.data[0].name})
    }

}
export default Forms