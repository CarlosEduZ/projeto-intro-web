let jogadores = []
const jogador1 = {
    nome: "Rogério Ceni",
    titulos: 18,
    mundial: true,
    clubes: ["São Paulo","Sinop" ]

}
const jogador2 = {
    nome: "Raí",
    titulos: 9,
    mundial: true,
    clubes: ["São Paulo","Botafogo-SP", "Ponte Preta", "Paris Saint-Germain"]
}
const jogador3 = {
    nome: "Serginho Chulapa",
    titulos: 4,
    mundial: false,
    clubes: ["São Paulo", "Santos", "Corinthians","Portuguesa", "São Caetano"]
}
const jogador4 = {
    nome: "Muller",
    titulos: 11,
    mundial: true,
    clubes: ["São Paulo", "Torino", "Palmeiras", "Kashiwa Reysol", "Santos", "Cruzeiro", "Corinthians", "São Caetano"]
}
const jogador5 = {
    nome: "Cafu",
    titulos: 10,
    mundial: true,
    clubes: ["São Paulo", "Real Zaragoza", "Palmeiras", "Roma", "Milan"]
}
if(jogador1.clubes[0] === "São Paulo"){
    jogadores.push(jogador1)
}else{
    alert("O Jogador não atuou pelo São Paulo")
}
if(jogador2.clubes[0] === "São Paulo"){
    jogadores.push(jogador2)
}else{
    alert("O Jogador não atuou pelo São Paulo")
}
if(jogador3.clubes[0] === "São Paulo"){
    jogadores.push(jogador3)
}else{
    alert("O Jogador não atuou pelo São Paulo")
}
if(jogador4.clubes[0] === "São Paulo"){
    jogadores.push(jogador4)
}else{
    alert("O Jogador não atuou pelo São Paulo")
}
if(jogador5.clubes[0] === "São Paulo"){
    jogadores.push(jogador5)
}else{
    alert("O Jogador não atuou pelo São Paulo")
}
let string = ""
for(let i in jogadores){
    for(let j of jogadores[i].clubes){
        string += `O ${jogadores[i].nome} jogou no ${jogadores[i].clubes} \n`
        break;
    }
}
console.log(string)
let stringClubes = ""
const devolveString = (clube) => {
    for(i in clube){
        stringClubes += `${clube[i].nome} \n${clube[i].titulos} \n${clube[i].mundial} \n${clube[i].clubes.toString()}`    
    } 
    return stringClubes
}
console.log(devolveString(jogadores))



//Ceni
const novaUl = document.createElement("ul")
const pai = document.getElementById("Ceni")
novaUl.setAttribute( "id","listaU")
// novaUl.setAttribute("class", "lista-jogadores")
pai.insertAdjacentElement("beforeend", novaUl)

const elementoDeLista = document.getElementById("listaU")


elementoDeLista.innerHTML += `<li>${jogadores[0].nome}</li>`;
elementoDeLista.innerHTML += `<li>Já jogou pelo: ${jogadores[0].clubes}</li>`;
elementoDeLista.innerHTML += `<li>Possui ${jogadores[0].titulos} Titulos</li>`;

 jogadores[0].mundial ? elementoDeLista.innerHTML += `<li>Já foi campeão mundial?: Sim</li>` : elementoDeLista.innerHTML += `<li>Já foi campeão mundial?: Não</li>`;


 //Raí
 const novaUl1 = document.createElement("ul")
const pai1 = document.getElementById("Rai")
novaUl1.setAttribute( "id","listaU1")
// novaUl1.setAttribute("class", "lista-jogadores")
pai1.insertAdjacentElement("beforeend", novaUl1)

const elementoDeLista1 = document.getElementById("listaU1")


elementoDeLista1.innerHTML += `<li>${jogadores[1].nome}</li>`;
elementoDeLista1.innerHTML += `<li>Já jogou pelo: ${jogadores[1].clubes}</li>`;
elementoDeLista1.innerHTML += `<li>Possui ${jogadores[1].titulos} Titulos</li>`;

 jogadores[1].mundial ? elementoDeLista1.innerHTML += `<li>Já foi campeão mundial?: Sim</li>` : elementoDeLista1.innerHTML += `<li>Já foi campeão mundial?: Não</li>`;

 //Chulapa

 const novaUl2 = document.createElement("ul")
 const pai2 = document.getElementById("Chulapa")
 novaUl2.setAttribute( "id","listaU2")
//  novaUl2.setAttribute("class", "lista-jogadores")
 pai2.insertAdjacentElement("beforeend", novaUl2)
 
 const elementoDeLista2 = document.getElementById("listaU2")
 
 
 elementoDeLista2.innerHTML += `<li>${jogadores[2].nome}</li>`;
 elementoDeLista2.innerHTML += `<li>Já jogou pelo: ${jogadores[2].clubes}</li>`;
 elementoDeLista2.innerHTML += `<li>Possui ${jogadores[2].titulos} Titulos</li>`;
 
  jogadores[2].mundial ? elementoDeLista2.innerHTML += `<li>Já foi campeão mundial?: Sim</li>` : elementoDeLista2.innerHTML += `<li>Já foi campeão mundial?: Não</li>`;

// Muller

const novaUl3 = document.createElement("ul")
 const pai3 = document.getElementById("Muller")
 novaUl3.setAttribute( "id","listaU3")
//  novaUl3.setAttribute("class", "lista-jogadores")
 pai3.insertAdjacentElement("beforeend", novaUl3)
 
 const elementoDeLista3 = document.getElementById("listaU3")
 
 
 elementoDeLista3.innerHTML += `<li>${jogadores[3].nome}</li>`;
 elementoDeLista3.innerHTML += `<li>Já jogou pelo: ${jogadores[3].clubes}</li>`;
 elementoDeLista3.innerHTML += `<li>Possui ${jogadores[3].titulos} Titulos</li>`;
 
  jogadores[3].mundial ? elementoDeLista3.innerHTML += `<li>Já foi campeão mundial?: Sim</li>` : elementoDeLista3.innerHTML += `<li>Já foi campeão mundial?: Não</li>`;

  // Cafu

  const novaUl4 = document.createElement("ul")
 const pai4 = document.getElementById("Cafu")
 novaUl4.setAttribute( "id","listaU4")
//  novaUl4.setAttribute("class", "lista-jogadores")
 pai4.insertAdjacentElement("beforeend", novaUl4)
 
 const elementoDeLista4 = document.getElementById("listaU4")
 
 
 elementoDeLista4.innerHTML += `<li>${jogadores[4].nome}</li>`;
 elementoDeLista4.innerHTML += `<li>Já jogou pelo: ${jogadores[4].clubes}</li>`;
 elementoDeLista4.innerHTML += `<li>Possui ${jogadores[4].titulos} Titulos</li>`;
 
  jogadores[4].mundial ? elementoDeLista4.innerHTML += `<li>Já foi campeão mundial?: Sim</li>` : elementoDeLista4.innerHTML += `<li>Já foi campeão mundial?: Não</li>`;

  //Função de busca
  function filtrarJogador(arrayDeObj, valorString) {
    let objARetornar = {};

    for (let i = 0; i < arrayDeObj.length; i++) {
        if (arrayDeObj[i].nome.toLowerCase() === valorString.toLowerCase()) {

            objARetornar.nome = arrayDeObj[i].nome;
            objARetornar.titulos = arrayDeObj[i].titulos;
            objARetornar.mundial = arrayDeObj[i].mundial;
            objARetornar.clubes = arrayDeObj[i].clubes;

            //objARetornar = {...arrayDeObj[i]};
        }
    }

    if (objARetornar.nome && objARetornar.nome.toLowerCase() !== valorString.toLowerCase()) {
        alert("Não encontrei jogador");
    } else {
        return objARetornar;
    }
}


  function buscaJogador() {
    
    const elementoDeCampo = document.getElementById("campo");

    
    const textoABuscar = elementoDeCampo.value;

    
    const jogadorRetornado = filtrarJogador(jogadores, textoABuscar);
    if (jogadorRetornado.nome) {
        const elementoDeLista = document.getElementsByClassName("lista-jogadores");
        
        for(let i of elementoDeLista){
           if(jogadorRetornado.nome !== i.getElementsByTagName("li")[0].innerHTML) {
            i.style.display = "none";
        }else {
            i.style.display = "Flex";
            const footer = document.querySelector("footer")
            footer.style.display = "flex"
            footer.style.flexDirection = "space-around"
            footer.style.position = "fixed"
            footer.style.bottom = "0"

        }
        
        }
        
    }else{
        alert("ÍDOLO NÃO ENCONTRADO");
    }
    

}
