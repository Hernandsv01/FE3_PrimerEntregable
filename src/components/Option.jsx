import { Component } from "react";
import data from "./data.json";

export default class Opcion extends Component{
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(e){
        e.preventDefault();
        this.props.advanceStorygit(this.props.opcion.toLowerCase());
    }
    render(){
        return (
            <div className="opcion">
                <button id={this.props.opcion} className="botones" onClick={this.handleButtonClick}>{this.props.opcion}</button>
                <h2>{data.find(e => e.id === this.props.id).opciones[this.props.opcion.toLowerCase()]}</h2>
            </div>
        )
    }
}