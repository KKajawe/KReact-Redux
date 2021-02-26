import axios from "axios"
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS,FETCH_USER_ERROR} from "./userTypes"


 const fetchUserRequest =()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}
 const fetchUserSuccess =(users)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
 const fetchUserError =(error)=>{
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}


export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const userList =response.data
            console.log(userList)
            dispatch(fetchUserSuccess(userList))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchUserError(errorMsg))
        })
    }
}