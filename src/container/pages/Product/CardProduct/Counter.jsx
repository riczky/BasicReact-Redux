import react from "react";
import { Component } from "react/cjs/react.production.min";
import {connect} from 'react-redux';
import actionType from "../../../../redux/reducer/globalActionType";

class Counter extends Component{
    state = {
        order: 4,
        name: 'riczky' 
    }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     // alert('plus button');
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }

    // handleMinus = () => {
    //     // alert('minus buton');
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         },() => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    render(){
        console.log(this.props);
        return(
            <div className="counter">
                {/* State Lokal */}
            {/* <button className="minus" onClick={this.handleMinus}>-</button> */}
                {/* State Global */}
            <button className="minus" onClick={this.props.minusOrder}>-</button>
            {/* State Lokal */}
            {/* <input type="text" value={this.state.order} /> */}
            {/* State Global */}
            <input type="text" value={this.props.order} />
            {/* StateLokal */}
            {/* <button className="plus" onClick={this.handlePlus}>+</button> */}
            {/* State Global */}
            <button className="plus" onClick={this.props.plusOrder}>+</button>

        </div>
        )   
        }
    }

    // Mengambil State Global 
    const mapStateToProps = (state) => {
        return{
            order: state.totalOrder
        }
    }

    // Mengambil Dispatch pada Reduce
    const mapDispatchToProps = (dispatch) =>{
        return{
            plusOrder: () => dispatch({type:actionType.PLUS_ORDER}),
            minusOrder: () => dispatch({type:actionType.MINUS_ORDER})
        }
    }  

export default connect(mapStateToProps, mapDispatchToProps)(Counter);