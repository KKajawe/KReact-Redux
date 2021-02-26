import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from "../redux";


function ItemContainer(props) {
    return (
        <div>
            <h2>Number of cakes or Icecreams</h2>
            <h3>{props.cake? 'cake':'icecream'} Item - {props.item}</h3>
            <button onClick={props.buyItem}>BUY_ITEMS</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispactFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispactFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
