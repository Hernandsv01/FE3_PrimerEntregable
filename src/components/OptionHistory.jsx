import { Component } from "react"

export default class OptionHistory extends Component{
    render(){
        return (
            <>
                <h4>Historial de oppciones elegidas: </h4>
                <ul>
                    {this.props.optionHistory.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </>
        );
    }
}