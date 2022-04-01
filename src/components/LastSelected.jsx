import { Component } from "react"

export default class LastSelected extends Component{
    render(){
        return (
            <h3>Selección anterior: {this.props.chosen}</h3>
        );
    }
}