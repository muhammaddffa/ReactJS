import React from "react";
import StopWatch from "./StopWatch";
import { Link } from 'react-router-dom';
export const CardComponent = (props) => {
    return (

        <button className='shadow-indigo-500 px-8'>
            <div className="min-h-screen flex items-center justify-center max-sm:-my-56">
                <div className="bg-blue-200 shadow-black w-full h-full shadow-lg">
                    <div className='shadow-xl shadow-pink-300 border-opacity-10 w-72 p-5 px-5 '>
                        <div className="w-full h-44 relative ">
                            <img className='w-full' src={props.img} alt='' />
                        </div>
                        <p className="text-base font-medium capitalize m-0 mt-0 text-slate-800 ">{props.title}</p>
                        <p className="">{props.desc}</p>
                    </div>
                    <div className="bg-purple-900 text-white">
                        <button>
                            
                            <Link to={'/Profile'}> To Profile</Link>

                        </button>
                    </div>
                </div>
            </div>
        </button>
    )
}
export default StopWatch