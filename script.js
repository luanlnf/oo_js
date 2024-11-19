class Animal {
    constructor(especie, idade, cor) {
        if(new.target === Animal) {
            throw new Error("A classe Animal não pode ser instanciada diretamente.");
    }
    this.especie = especie;
    this.idade = idade;
    this.cor = cor;
    }
    exibirDetalhes() {
    return `Especie: ${this.especie}, Idade: ${this.idade}, Cor: ${this.cor}`;
}
}


//Classe herdeira 1
class Cachorro extends Animal {
    constructor(especie, idade,cor,raca) {
        super(especie, idade, cor);
        this.raca = raca;
    }
    exibirDetalhes() {
        return `${super.exibirDetalhes()}, Raça: ${this.raca}`;
    }   
}
//Classe herdeira 2
class Gato extends Animal {
    constructor(especie, idade, cor, nome) {
        super(especie, idade,cor);
        this.nome = nome;
    }
    exibirDetalhes() {
        return `${super.exibirDetalhes()}, nome: ${this.nome}`;
    }
}

const cachorro1 = new Cachorro("Cachorro", 3, "preto", "Labrador");
const cachorro2 = new Cachorro("Cachorro", 4, "branco", "Golden Retriever");
const gato = new Gato("Gato", 2, "Branco", "Xico");
const gato2 = new Gato("Gato", 1, "Preto", "Tangerina");

console.log(cachorro1.exibirDetalhes());
console.log(cachorro2.exibirDetalhes());
console.log(gato.exibirDetalhes());
console.log(gato2.exibirDetalhes()); 