import { Component } from "react"
import Text from "./Text"
import Option from "./Option"
import LastSelected from "./LastSelected"
import OptionHistory from "./OptionHistory"

export default class Layout extends Component{
    render(){
        return (
            <div className="layout">
                <Text id={this.props.currentId+this.props.currentOption}/>
                <div className="opciones" id={this.props.currentId} opcion={this.props.currentOption}>
                    <Option opcion="A" id={this.props.currentId+this.props.currentOption} advanceStory={this.props.advanceStory}/>
                    <Option opcion="B" id={this.props.currentId+this.props.currentOption} advanceStory={this.props.advanceStory}/>
                </div>
                <div className="recordatorio">
                    <LastSelected chosen={this.props.optionHistory[this.props.optionHistory.length-1]}/>
                    <OptionHistory optionHistory={this.props.optionHistory}/>
                </div>
            </div>
        );
    }
}