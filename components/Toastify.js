'use client'
import { toast } from "react-toastify"

window.notify= (msg, type)=>{
 
const options = {
    position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
}

switch(type){
case 'success':
    toast.success(msg, options)
    break
case 'error':
    toast.error(msg, options)
    break
default:
    toast(msg, options)
    
}
}