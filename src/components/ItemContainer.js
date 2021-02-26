import React from 'react'
import { connect } from 'react-redux'


function ItemContainer(props) {
    return (
        <div>
            <h2>Number of cakes or Icecreams</h2>
            <h3> Item - {props.item}</h3>
        </div>
    )
}

const mapStateToProps =(state,ownProps)=>{
    const itemState= ownProps.cake? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return{
        item : itemState
    } 
}

export default connect(mapStateToProps)(ItemContainer)
