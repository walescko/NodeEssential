import React, {Component} from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody  from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
    state = {
        livros: []
    };
    componentDidMount() {
        fetch("/api/livros.json")
            .then(response => response.json())
            .then(livros => this.setState({livros}))
            .catch(function(error){
                console.log("Erro de requisição")
            })
            .finally(function (){
                console.log("Sempre retorna")
            })
    }
    handleRemoverLinha = (id) => {
        const livros = this.state.livros.filter(l => l.id !== id);
        this.setState({livros})
    }
    render(){
  return (
    <table className="tabela">
        <TabelaHead />
        <TabelaBody
            livros={this.state.livros}
            removerLinha = {this.handleRemoverLinha}
            />
        <TabelaFoot qdeLivros={this.state.livros.length}/>
    </table>
  );
}
}

export default App;
