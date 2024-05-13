
var cliente1 = {
  nome: "amanda",
  sobrenome: "Silva",
  anoNascimento: 1995,
  telefones: ["(00) 8461-0186", "(00) 9105-9107"],
  endereco: {
    rua: "Rua margarida",
    cep: "02758-839",
    cidade: "são paulo",
    complemento: "Apto 02"
  }
};

var cliente2 = {
  nome: "felipe",
  sobrenome: "luiz",
  anoNascimento: 1992,
  telefones: ["(00) 1095-1742", "(00) 1632-0659"],
  endereco: {
    rua: "rua jardim das flores",
    cep: "91204-123",
    cidade: "rio de janeiro",
    complemento: "Casa cinza"
  }
};


function mostrarCliente(cliente) {
  console.log("Nome completo:", cliente.nome + " " + cliente.sobrenome);
  console.log("Ano de Nascimento:", cliente.anoNascimento);
  console.log("Telefones:", cliente.telefones.join(", "));
  console.log("Endereço:", 
              cliente.endereco.rua + ", " + 
              cliente.endereco.cep + ", " + 
              cliente.endereco.cidade + ", " + 
              cliente.endereco.complemento);
}

mostrarCliente(cliente1);
mostrarCliente(cliente2);