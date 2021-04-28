import React,{Component} from 'react';
import './quickSearch.css';
import QuickSearchDisplay from './quickSearchDisplay';
const murl = "http://localhost:7500/mealtype";


class QuickSearch extends Component{
    constructor(){
        super()
        this.state = {
            mealtype:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <QuickSearchDisplay mealdata={this.state.mealtype} />
            </React.Fragment>
        )
    }
    componentDidMount(){
        fetch(murl, {method:'GET'})
        .then((res) => res.json())
        .then((data) =>{
            this.setState({mealtype:data})
        })
    }
}
export default QuickSearch;