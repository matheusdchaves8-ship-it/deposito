// lista da loja de livros
let listadoinfo = ["Em Busca do Tempo Perdido", "Ulysses", "Dom Quixote","A Montanha Mágica", "Os Irmãos Karamazov — Fiódor Dostoiévski", "Lolita","Huckleberry Finn","Mark Twain","Scott Fitzgerald","George Orwell"]
let recebe  = prompt("Digite algum livro")
// adicionando mais com push
listadoinfo.push("Diário de um banana", "Sensações de poder")


// verificando a existência do livro "Em busca do Tempo Perdido"
if (listadoinfo.includes("Em Busca do Tempo Perdido")) {
    console.log("Achou produto");
} else {
    console.log("Produto não encontrado");
}

// verificando se tem "Entre sol e chuva"
if (listadoinfo.includes("Em Busca do Tempo Perdido")) {
    console.log("Achou produto");
} else {
    console.log("Produto não encontrado");
}

// utilizando nomes que possuem mais de 5 letras
let listadoinfofiltrados = produtos.filter((p) => p.length > 5);

// mostrando tudo
console.log(listadoinfo);
console.log (listadoinfofiltrados);






