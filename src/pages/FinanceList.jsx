import React from "react"; 
import { useNavigate } from "react-router";
import { TaskContext } from "./TaskProvider";
import { useContext } from "react";

const FinanceList = ({ handleEdit, handleRemove}) => {

    const { task, setTask} = useContext(TaskContext)
    console.log("task: ", task);
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-5">Transaction</h2>

            <table className="w-full table-fixed border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="p-2 border border-gray-300">Description</th>
                        <th className="p-2 border border-gray-300">Amount</th>
                        <th className="p-2 border border-gray-300">Action</th>
                    </tr>
                </thead>

                <tbody>
                    { task.map((curtask, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="p-2 border border-gray-300">{curtask.description}</td>
                                <td className="p-2 border border-gray-300">${curtask.amount}</td>
                                <td className="p-2 border border-gray-300">
                                    <button
                                        className="bg-yellow-500 px-4 py-2 text-white mr-2"
                                        onClick={() => handleEdit(curtask)}>
                                        Edit
                                    </button>
                                    <button className="bg-red-500 px-4 py-2 text-white" onClick={() => handleRemove(curtask.id)}>Delete</button>
                                </td>
                            </tr>
                        ))


                    }

                </tbody>
            </table>

            <div className="text-center">
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white font-bold py-2 px-4 rounded mt-3 text-center" onClick={back}>
                    GoToBack
                </button>
            </div>
        </div>
    );
};

export default FinanceList;
