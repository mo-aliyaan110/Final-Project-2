import React from 'react';


const OrderDisplay = (props) =>{
    const renderOrder = ({orderdata}) =>{
        if(orderdata){
            return orderdata.map((item) =>{
                return(
                   
                        
                            <tr>
                                <th>{item.order_id} </th>
                                &nbsp;
                                <td>{item.Restaurant_Name}</td>
                                &nbsp;
                                <td>{item.Name}</td>
                                &nbsp;
                                <td>{item.Email}</td>
                                &nbsp;
                                <td>{item.Phone}</td>
                                &nbsp;
                                <td>{item.Persons}</td>

                            </tr>
                        

                        
                    
                    
                    
                                
                    
                    
                    
                    
                )
            })
        }

    }
    return(
        <React.Fragment>
            
            <div className='container'>
                
                    <table>
                        <thead>
                            <tr>
                                <th> Order Id </th>
                                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <th> Restaurant Name </th>

                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <th> Name </th>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <th> Email </th>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <th> Phone </th>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <th> Persons</th>
                                &nbsp;
                            </tr>
                        </thead>
                        <tbody >
                           {renderOrder(props)}
                          
                        </tbody>
                    </table>
            </div>
            
        </React.Fragment>
    )
}
export default OrderDisplay;