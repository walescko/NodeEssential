function Saudacao(props){
    return <h1>Olá {props.nome}</h1>;
}

function Header(){
 return React.createElement("header", {className: "topo"},
     React.createElement("h1", {className: "logo"}, "Editora Moujor Tec"));
}
ReactDom.render(Header(), document.getElementById("root"));