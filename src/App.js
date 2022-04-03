import { Component } from "react"
import Layout from "./components/Layout";
import data from "./components/data"
import Swal from "sweetalert2";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      isRendered: true,
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
      this.setState({isRendered: false});
    }
  }

  componentDidUpdate(){
    if(!this.state.isRendered){
      Swal.fire({
        title: "Fin de la historia",
        text: "Desea volver a comenzar?",
        denyButtonText: "No",
        showDenyButton: true,
        confirmButtonText: "Si",
        color: "white"
      }).then(result => {
          if(result.isConfirmed){
              this.setState({
                  currentId: 1,
                  currentOption: "",
                  optionHistory: []
              }, this.setState({isRendered: true}));
          }else{
            this.setState({isRendered: true})
          }
      });
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.isRendered? <Layout advanceStory={this.advanceStory} currentId={this.state.currentId} currentOption={this.state.currentOption} optionHistory={this.state.optionHistory}/>:""}
      </div>
    );
  }
}
