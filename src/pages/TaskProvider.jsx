

import React, { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([]);
    const [isAuth , setIsAuth]=useState(false);
    const [user , setUser]= useState({username:"admin" , password:"1234"})
    const [curUser , setCurUser]=useState(null);

    return (
        <TaskContext.Provider value={{ task, setTask , isAuth , setIsAuth , user , setUser , curUser , setCurUser }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
export const useTaskContext = ()=> useContext(TaskContext)


// import React,{ createContext , useState} from 'react'

// export const TaskContext= createContext();

// const TaskProvider = ({children}) => {
//     const[task , setTask]=useState([]);
//   return (
//     <TaskContext.Provider value={{task , setTask}}>
//         {children}
//     </TaskContext.Provider>
//   )
// }

// export default TaskProvider


