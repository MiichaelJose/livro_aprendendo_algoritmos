function pesquisa_binaria(item, lista) {
    let baixo = 0
    let alto = lista.length - 1
    //(baixo + alto) / 2 = 4.5 
    //Math.floor((baixo + alto) / 2) = 4
    

    while(baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio]

        if(chute == item) {
            return meio;
        }
        if(chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1 
        }
    }
}

let lista = [1,3,5,7,9]
console.log(pesquisa_binaria(5, lista));





