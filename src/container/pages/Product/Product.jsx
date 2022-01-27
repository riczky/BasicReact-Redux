import React, {Component, Fragment} from "react";
import './Product.css';
import etanee from '../../../img/etanee3.jpg';
import troley from '../../../img/troley.png';
import CardProduct from "./CardProduct/CardProduct";
import {connect} from 'react-redux';

class Product extends Component{
    state = {
        order: 4,
        name: 'riczky' 
    }


    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
            <p>Halaman Product</p>
            <hr />  
            <div className="header">
                <div className="logo">
                    <img src={etanee} alt="logo" width="120px"  />
                </div>
                <div className="troley">
                    <img src={troley} alt="troley" />
                     {/*Lokal Order  */}
                    {/* <div className="count">{this.state.order}</div>    */}
                    {/* Global Order */}
                    <div className="count">{this.props.order}</div>   

                </div>    
            </div>    
            
            <CardProduct />
            
            </Fragment>

            
        )
    }
}

const mapStateToProps = state =>{
    return{
        order: state.totalOrder
    }
}


export default connect(mapStateToProps)(Product);











