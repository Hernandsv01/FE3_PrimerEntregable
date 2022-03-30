import { Component } from "react";
import data from "./data.json";

export default class Text extends Component {
    render(){
        return (
            <>
                <h1 className="historia">{data.find(e => e.id === this.props.id).historia}</h1>
            </>
        );
    }
}