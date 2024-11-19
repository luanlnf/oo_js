
class Veiculo {
constructor(marca, modelo, ano) {
    if (new.target === Veiculo) {
        throw new Error("A classe Veiculo não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }

    exibirDetalhes() {
    return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

  // Classe herdeira 1
class Carro extends Veiculo {
    constructor(marca, modelo, ano, tipo) {
    super(marca, modelo, ano);
      this.tipo = tipo; // Ex: sedan, SUV
    }

    exibirDetalhes() {
    return `${super.exibirDetalhes()}, Tipo: ${this.tipo}`;
    }
}

  // Classe herdeira 2
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas; // Ex: 150cc, 500cc
    }

    exibirDetalhes() {
    return `${super.exibirDetalhes()}, Cilindradas: ${this.cilindradas}`;
    }
}


    const carro1 = new Carro("Toyota", "Corolla", 2020, "Sedan");
    const carro2 = new Carro("Honda", "HR-V", 2022, "SUV");
    const moto1 = new Moto("Yamaha", "MT-03", 2021, "300cc");


    console.log(carro1.exibirDetalhes()); 
    console.log(carro2.exibirDetalhes()); 
    console.log(moto1.exibirDetalhes());  
