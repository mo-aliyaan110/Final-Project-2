import React from 'react';
import { Link } from 'react-router-dom';

const QuickSearchDisplay = (props) =>{
    const listMeals = ({mealdata}) =>{
        if(mealdata){
            return mealdata.map((item) =>{
                return(
                    <Link to={`/list/${item.mealtype}`}>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3 ">
                        <div className="img mr-2">
                            <img className="bf img-responsive" src={`./img/${item.name}.jpg`} alt=""/>
                    
                        </div>
                            
                            <div className="imgcon p-3">
                                
                                <h5 className="heading" > {item.name} </h5>
                                <p className="des"> Try our satisfying meal options </p>
                            </div> 
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <React.Fragment>
              
            <h1 className="heading"> Quick Search </h1>
            <p className="des"> <h4>Discover restaurants by type of meal..!</h4>  </p>
            <div className='row'>
                {listMeals(props)}
            </div>    
                
        </React.Fragment>
    )
}
export default QuickSearchDisplay;