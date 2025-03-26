import React, { useContext, useReducer } from "react";
// import {TaskContext} from './TaskProvider'
import { TaskContext } from './TaskProvider';
import { useNavigate } from "react-router";
import AddReducer from "../components/Reducer/FinanceReducer";


const initalvalue = {
  description: "",
  amount: "",
}

const FinanceTracker = () => {


  //navigate
  const navigate = useNavigate();
  const gotolist = () => {
    navigate('/FinanceList')
  }

  const {task, setTask } = useContext(TaskContext);
  const [state, dispatch] = useReducer(AddReducer, initalvalue);

  // const addTranscation = (e) => {
  //   e.preventDefault();
  //   if (!state.description || !state.amount) {
  //     alert("Please enter both description and amount.");
  //     return;
  //   }
  //   setask([..task, {description:state.description, amount:state.amount }])
  //   dispatch({type: 'SET_DESCRIPTION' , payload:""})
  //   dispatch({type: 'SET_AMOUNT' , payload:""})

  //   gotolist();
  // }

  const handlesubmit = (e) => {
    e.preventDefault()
    const newTask = {
      description: state.description,
      amount: state.amount
    }

    setTask((prev)=>[...prev , newTask]);
    // seTask ([...task, newTask])
    console.log("new transction", newTask);
    
  }

  return (
    <div className="min-h-screen bg-gray-200 ">
      <h1 className="text-3xl font-bold text-center pt-12">Personal Finance Tracker</h1>
      <div className="container mt-20 mx-auto px-5 py-4 ">
        <div className="p-4 bg-white rounded-lg shadow-md  shadow-black">

          <div className="mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border">

            <h1 className="text-xl font-bold text-center mb-5">Add Yourtask</h1>

            <form onSubmit={handlesubmit} className="flex text-center flex-col mx-auto border border-double border-indigo-500 p-4 rounded-lg">

              <input type="text" className="border border-slate-300 rounded-md w-full px-2 py-2 mb-2" placeholder="Description" value={state.description} onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })} />

              <input type="number" className="border border-slate-300 rounded-md w-full px-2 py-2 mb-2" placeholder="Amount" value={state.amount} onChange={(e) => dispatch({ type: 'SET_AMOUNT', payload: e.target.value })} />

              <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white font-bold py-2 px-4 rounded mt-3" onClick={()=>{gotolist()}}>
                Add Transaction
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTracker;

// import React, { useContext, useReducer} from "react";
// import { TaskContext } from "./TaskProvider";
// import { useNavigate } from "react-router";
// import AddReducer from "../../Reducer/FinanceReducer";

// const initalvalue={
//   description:"",
//   amount:"",
// }

// const FinanceTracker = () => {


// //navigate
// const navigate= useNavigate();
// const gotolist =()=>{
//    navigate('/FinanceList')
// }

// const task, setask] = useContext(TaskContext);
// const [state , dispatch]=useReducer(AddReducer , initalvalue);

//   const addTranscation = (e) => {
//     e.preventDefault();
//     if (!state.description || !state.amount) {
//       alert("Please enter both description and amount.");
//       return;
//     }
//     setask([..task, {id:Date.now() ,description:state.description, amount:state.amount }])
//     dispatch({type: 'SET_DESCRIPTION' , payload:""})
//     dispatch({type: 'SET_AMOUNT' , payload:""})

//     gotolist();
//   }

//   return (
//     <div className="min-h-screen bg-gray-200 ">
//       <h1 className="text-3xl font-bold text-center pt-12">Personal Finance Tracker</h1>
//       <div className="container mt-20 mx-auto px-5 py-4 ">
//         <div className="p-4 bg-white rounded-lg shadow-md  shadow-black">

//           <div className="mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border">

//             <h1 className="text-xl font-bold text-center mb-5">Add Yourtask</h1>

//             <form onSubmit={addTranscation} className="flex text-center flex-col mx-auto border border-double border-indigo-500 p-4 rounded-lg">

//               <input
//                 type="text"
//                 className="border border-slate-300 rounded-md w-full px-2 py-2 mb-2"
//                 placeholder="Description"
//                 value={state.description}
//                 onChange={(e) => dispatch({type:'SET_DESCRIPTION', payload:e.target.value})}
//               />

//               <input
//                 type="number"
//                 className="border border-slate-300 rounded-md w-full px-2 py-2 mb-2"
//                 placeholder="Amount"
//                 value={state.amount}
//                 onChange={(e) =>  dispatch({type:'SET_AMOUNT', payload:e.target.value})}
//               />

// <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white font-bold py-2 px-4 rounded mt-3" onClick={gotolist}>
//   Add Transaction
// </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinanceTracker;

