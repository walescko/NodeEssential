function Saudacao(props){
    return <h1>Olá {props.nome}</h1>;
}

function Header(){
 return React.createElement("header", {className: "topo"},
     React.createElement("h1", {className: "logo"}, "Editora Moujor Tec"));
}
ReactDOM.render(Header(), document.getElementById("root"));

function Navegacao(){
    return React.createElement("div", {className: "navegação"}, "Coluna de navegação");
}
ReactDOM.render(Navegacao(), document.getElementById("root"));

function Principal(){
    return React.createElement("div", {className: "principal"}, "Coluna Principal");
}
ReactDOM.render(Principal(), document.getElementById("root"));

function Footer(){
    return (React.createElement("footer", {className: "rodape"}, React.createElement("p", { }, "Rodapé")));
}
ReactDOM.render(Footer(), document.getElementById("root"))

function Topo(){
    return React.createElement("div", {className: "c-topo"}, Header(), Navegacao());
}
ReactDOM.render(Topo(), document.getElementById("root"));

function App(){
    return React.createElement(React.Fragment, { },
        Topo(),
        Principal(),
        Footer()
    );
}