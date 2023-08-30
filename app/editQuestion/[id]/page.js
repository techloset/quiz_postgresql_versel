import EditQuestionForm from "@/components/EditQuestionForm";


const getQuestionById = async (id) =>{

    // try {
    //     const res = await fetch(`api/ques/${id}`, {cache:"no-store"})
    //     console.log("res",res)
    //     if(!res.ok){
    //         throw new Error("Failed To Fetch")
    //     }
    //     const data = await res.json()
    //    return data
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        const url = new URL(`/api/ques/${id}`, 'https://quiz-postgresql-versel-thfl.vercel.app');
        
        const res = await fetch(url, { cache: "no-store" });
        
        if (!res.ok) {
            throw new Error("Failed To Fetch");
        }
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    
    
}

export default async function EditQuestion({params}) {
  console.log("fjasdfajsdl",params)
    const {id} = params
    const {questions} = await getQuestionById(id)
    console.log("first",questions)
    const {question, option1,option2,option3,correctOption} = questions 

  return (
    <div>
        <EditQuestionForm id={id} question={question} option1={option1} option2={option2} option3={option3} correctOption={correctOption} />
    </div>
  )
}
