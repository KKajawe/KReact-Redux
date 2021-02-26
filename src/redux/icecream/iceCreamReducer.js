import { BUY_CAKE } from "../cake/cakeTypes"
import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numOfIceCream : 30
}

const iceCreamReducer =(state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCream : state.numOfIceCream-1
        }
        default: return state
    }

}

export default iceCreamReducer