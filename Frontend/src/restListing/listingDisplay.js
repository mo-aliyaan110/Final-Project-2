import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisp = (props) =>{
    const renderList = ({listdata})=>{
        if(listdata){
            return listdata.map((item) =>{
                return(
                    <div className='Item' id={item._id}>
                    <div className='row'>
                       
                        <div className='col-md-3'>
                            <img className='Image' alt='Picture_of_restaurant'  src={item.thumb}/>
                        </div>
                         
                        <div className='col-md-9'>
                            <div className='rest_name'>
                                <Link className='item_namestyle' to={`/rest/${item._id}`}>{item.name}</Link>
                                <div className="city_name"> {item.city_name} </div>
                                <div className="address-text">{item.locality} </div>
                                <div className="address-text">{item.address} </div>

                            </div>
                          
                        </div>
                        
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='CUISINES-COST-FOR-TWO'> Cuisine Type:</div>
                            <div className='CUISINES-COST-FOR-TWO'> Cost For Two:</div>
                        </div>
                        <div className='col-md-9'>
                            <div className='Bakery-700'>{item.Cuisine[0].name}, {item.Cuisine[1].name}</div>
                            <div className='Bakery-700'> {item.cost} </div>
                        </div>

                    </div>

                </div>
                )
            })
        }
    }
   
    return(
        <React.Fragment>
                <div className='row'>
                    <div className='col-lg-1'>
                        {renderList(props)}
                    </div>

                </div>
        </React.Fragment>
    )
}
export default ListingDisp;