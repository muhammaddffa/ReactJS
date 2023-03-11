import React, { Component } from "react";

export default class Count extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        document.title = `kamu Mengeklik ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `kamu Mengeklik ${this.state.count} times`
    }
    render() {
        return(
            <div className="justify-center p-5 bg-blue-400">
                <button onClick= {() => this.setState({count: this.state.count + 1})}className="hover:bg-white hover:text-black p-3 bg-black text-white">click saya</button>
                <p>you click{this.state.count} times</p>
            </div>
        )
    }
    
}