import React from 'react'
import {useSelector,useStore} from "react-redux"

const NewHotel = () => {
    const {auth}=useSelector((state)=>({...state}));
    return (
        <div className="container-fluid h1 p-5 text-center">
            Post a new hotel
        </div>
    )
}

export default NewHotel