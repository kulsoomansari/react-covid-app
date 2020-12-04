import React, { Component } from 'react'
import Name from './Components/Name'
export class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'kulsoom', 
            greet: 'good morning'
        }
    }
    render() {
        return (
            <div>
                <Name />
            </div>
        )
    }
}

export default Main
