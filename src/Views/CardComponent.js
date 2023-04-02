import React, { Component } from 'react'
import axios from "axios";

export default class CardComponent extends Component {
    state = {
        menus: []

    }
    componentDidMount() {
        axios.get("http://localhost:3005/menu")
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    menus: (res.data.data)
                })
            })
    }

    render() {
        const {menus} = this.state 
        return (
            
            // <button className='shadow-indigo-500 px-8' on onClick={() => navigate(props.link, { state: props })}>
                <div className="min-h-screen flex items-center justify-center max-sm:-my-56">
                    <div className="bg-blue-200 shadow-black w-full h-full shadow-lg">
                       
               {menus.map((menus, index) => {
                   return(
                    <div className='shadow-xl shadow-pink-300 border-opacity-10 w-72 p-5 px-5 '>
                        <div className="w-full h-44 relative ">
                            <img className='w-full' src={`${menus.Image}`} alt='' />
                        </div>
                        <p className="text-base font-medium capitalize m-0 mt-0 text-slate-800 ">Rp.{`${menus.harga}`}</p>
                        <div className='p-4'>
                        <p className="">{`${menus.nama}`}</p>
                        <p className="">{`${menus.deskripsi}`}</p>
                        </div>
                    </div>
                )
            })}
                </div>
            </div>
            // </button>
        )
    }
}

