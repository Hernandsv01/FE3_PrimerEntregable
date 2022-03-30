import { Component } from "react"
import Text from "./Text"
import Opcion from "./Opcion"

export default class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            idActual: 1,
            opcion: ""
        }
        this.nextId = this.nextId.bind(this);
        this.setOption = this.setOption.bind(this);
    }
    nextId(){
        this.setState({
            idActual: (this.state.idActual+1)
        });
    }
    setOption(opcionElegida){
        this.setState({
            opcion: opcionElegida
        });
    }
    render(){
        return (
            <div className="layout">
                <Text id={this.state.idActual+this.state.opcion}/>
                <div className="opciones" id={this.state.idActual} opcion={this.state.opcion}>
                    <Opcion opcion="A" id={this.state.idActual+this.state.opcion} nextId={this.nextId} setOption={this.setOption}/>
                    <Opcion opcion="B" id={this.state.idActual+this.state.opcion} nextId={this.nextId} setOption={this.setOption}/>
                </div>
                <div className="recordatorio">
                    {/* <SelAnterior/>
                    <Historial/> */}
                </div>
            </div>
        );
    }
}