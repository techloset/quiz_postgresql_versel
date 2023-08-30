import EditQuestionForm from "@/components/EditQuestionForm";


const getQuestionById = async (id) =>{

    try {
        const res = await fetch(`http://localhost:3000/api/ques/${id}`, {cache:"no-store"})
        const json = await res.json()
      console.log(json)
        if(!res.ok){
            throw new Error("Failed To Fetch")
        }
       return json
    } catch (error) {
        console.log(error);
    }
    
}


export default async function EditQuestion({params}) {
    // console.log("id===================================", params);

    const {id} = params
    const {questions} = await getQuestionById(id)
    // console.log("questions",questions);
    const {question, option1,option2,option3,correctOption} = questions 

  return (
    <div>
        <EditQuestionForm id={id} question={question} option1={option1} option2={option2} option3={option3} correctOption={correctOption} />
    </div>
  )
}
