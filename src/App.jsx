import React, {useState} from 'react'
import { X } from 'lucide-react';
const App=()=>{

const [title,setTitle]=useState('')
const[details,setDetails]=useState('')

const [task,setTask]=useState([])

const submitHandler=(e)=>{
  e.preventDefault();
 
  const copyTask=[...task];
 
  copyTask.push({title,details});

  setTask(copyTask);
  console.log(task);

  setTitle('')
  setDetails('')
}
  
const deleteNote=(idx)=>{
 const copyTask=[...task];

 copyTask.splice(idx,1)
 setTask(copyTask);
}

  return(
    <div className='h-screen lg:flex bg-black text-white '>
     
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className="flex gap-4 lg:w-1/2 p-10 flex-col items-start  ">
        <h1 className="text-4xl font-bold">Add Notes</h1> 
    

        <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 outline-none  border-2 rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />


       <textarea
        type="text" 
       className="px-5 h-40 w-full font-medium py-2 flex items-start border-2 outline-none rounded" 
       placeholder="Write Details Here"
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value);
       }}
       />

       <button className='bg-white active:scale-95 w-full font-medium text-black px-5 py-2 outline-none rounded'>
        Add Notes</button>
      


      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className="text-4xl font-bold">Recent Notes</h1>
      <div className='flex justify-start flex-wrap items-start gap-5 mt-6 h-[90%] overflow-auto'>
       {task.map(function(elem,idx){
      
       return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 bg-cover w-40 pt-9 pb-5 px-4 text-black rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
      
            <div>
             <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
             <p className='mt-3 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
             </div>
             <button onClick={()=>{
              deleteNote(idx)
             }}className='w-full py-1 text-xs rounded font-bold cursor-pointer bg-red-600 active:scale-95 text-white'>Delete</button>
       </div>
       
       })}
       
      </div>
      </div>
    </div>
  )
}
export default App