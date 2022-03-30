import { Component } from "react"
import Text from "./Text"
import Opcion from "./Opcion"
import data from "./data"

export default class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            idActual: 1,
            opcionActual: ""
        }
        this.nextId = this.nextId.bind(this);
        this.setOption = this.setOption.bind(this);
    }
    nextId(){
        if(this.state.idActual+1 <= (data.length+1)/2){
            this.setState({
                idActual: (this.state.idActual+1)
            });
        }else{
            //Sweet alert fin
            alert("Fin");
        }
    }
    setOption(opcionElegida){
        if(this.state.idActual+1 <= (data.length+1)/2){
            this.setState({
                opcionActual: opcionElegida
            });
        }
    }
    render(){
        return (
            <div className="layout">
                <Text id={this.state.idActual+this.state.opcionActual}/>
                <div className="opciones" id={this.state.idActual} opcion={this.state.opcionActual}>
                    <Opcion opcion="A" id={this.state.idActual+this.state.opcionActual} nextId={this.nextId} setOption={this.setOption}/>
                    <Opcion opcion="B" id={this.state.idActual+this.state.opcionActual} nextId={this.nextId} setOption={this.setOption}/>
                </div>
                <div className="recordatorio">
                    {/* <SelAnterior/>
                    <Historial/> */}
                </div>
            </div>
        );
    }
}