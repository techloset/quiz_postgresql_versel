import EditQuestionForm from "@/components/EditQuestionForm";


const getQuestionById = async (id) =>{

    try {
        const res = await fetch(`http://localhost:3000/api/ques/${id}`, {cache:"no-store"})

        if(!res.ok){
            throw new Error("Failed To Fetch")
        }
       return res.json()
    } catch (error) {
        console.log(error);
    }
    
}

export default async function EditQuestion({params}) {

    const {id} = params
    const {questions} = await getQuestionById(id)
    const {question, option1,option2,option3,correctOption} = questions 

  return (
    <div>
        <EditQuestionForm id={id} question={question} option1={option1} option2={option2} option3={option3} correctOption={correctOption} />
    </div>
  )
}
