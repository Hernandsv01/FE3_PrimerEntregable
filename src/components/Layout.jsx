import { Component } from "react"
import Text from "./Text"
import Option from "./Option"
import LastSelected from "./LastSelected"
import OptionHistory from "./OptionHistory"
import data from "./data"
import Swal from "sweetalert2";

export default class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentId: 1,
            currentOption: "",
            optionHistory: []
        }
        this.advanceStory = this.advanceStory.bind(this);
    }
    advanceStory(chosenOption){
        if(this.state.currentId+1 <= (data.length+1)/2){        
            this.setState({
                currentId: (this.state.currentId+1),
                currentOption: chosenOption,
                optionHistory: [...this.state.optionHistory, chosenOption.toUpperCase()]
            });
        }else{
            Swal.fire({
                title: "Fin de la historia",
                text: "Desea volver a comenzar?",
                denyButtonText: "No",
                showDenyButton: true,
                confirmButtonText: "Si",
                color: "white",
            }).then(result => {
                if(result.isConfirmed){
                    this.setState({
                        currentId: 1,
                        currentOption: "",
                        optionHistory: []
                    });
                }
            });
        }
    }

    render(){
        return (
            <div className="layout">
                <Text id={this.state.currentId+this.state.currentOption}/>
                <div className="opciones" id={this.state.currentId} opcion={this.state.currentOption}>
                    <Option opcion="A" id={this.state.currentId+this.state.currentOption} advanceStory={this.advanceStory}/>
                    <Option opcion="B" id={this.state.currentId+this.state.currentOption} advanceStory={this.advanceStory}/>
                </div>
                <div className="recordatorio">
                    <LastSelected chosen={this.state.optionHistory[this.state.optionHistory.length-1]}/>
                    <OptionHistory optionHistory={this.state.optionHistory}/>
                </div>
            </div>
        );
    }
}