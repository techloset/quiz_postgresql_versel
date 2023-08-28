"use client"


export default function RemoveBtn({id}) {
  
  

  const removeTopic = async () => {
    const confirmed = confirm("Are You Sure To Delete Topic?")
     
    if(confirmed){
      const res =  await fetch(`http://localhost:3000/api/ques?id=${id}`,{
        method: "DELETE",
      })

      if(res.ok){
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
