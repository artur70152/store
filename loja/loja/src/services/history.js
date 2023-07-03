import React from "react";
import { useNavigate } from "react-router-dom";
const nav=(component)=>{
    return (props)=>{
        const navigation=useNavigate();
        return <Component navigation={navigation} {...props}/>
    }
}
export default nav;