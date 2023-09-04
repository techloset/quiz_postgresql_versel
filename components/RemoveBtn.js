"use client"

import { toast } from "react-toastify"


export default function RemoveBtn({id}) {
  
  const removeTopic = async () => {
    const confirmed = confirm("Are You Sure To Delete Topic?")
         if(confirmed){
      const res =  await fetch(`/api/ques?id=${id}`,{
        method: "DELETE",
      })
      if(res.ok){
        toast.success('Question has been deleted!')
        window.location.reload()
      }
    }
  }
  return (
    <button className="py-1 px-2 bg-red-400 rounded-sm text-white" onClick = {removeTopic} >
       Delete
    </button>
  )
}
