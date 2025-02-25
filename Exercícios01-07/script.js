function alteraCor(){
  
    var main = document.getElementById("main");

    main.classList.toggle("bg-dark");
   

}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("itemForm");
    const input = document.getElementById("itemInput");
    const lista = document.getElementById("lista");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const texto = input.value.trim();

        if (texto === "") return; 
        const li = document.createElement("li");
        li.textContent = texto;
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // Adiciona evento de duplo clique para remover o item
        li.addEventListener("dblclick", function () {
            this.remove();
        });

        lista.appendChild(li); 
        input.value = "";
        input.focus();  
    });
});

fetch("http://demo4686746.mockable.io/")
.then((res) => res.json())
.then((data) => {

const resultado = document.getElementById("resultado");

resultado.textContent = data.mensagem;

})
.catch((error) => {


    resultado.textContent = "Erro ao buscar";
});




//Ex 05

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const dados = {
        nome: nome,
        email: email
    }

    fetch("http://demo4686746.mockable.io/", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("resultado").textContent = "Resposta do Servidor: " + JSON.stringify(data);
    })
    .catch((error) => {
        console.error("Erro ao enviar dados: " + error)

    })

})


//Exercício 06

fetch("http://demo4686746.mockable.io/")
.then((res) => res.json())
.then((data) => {


const tabelaUsuarios = document.getElementById("tabelaJSON");

data.usuarios.forEach((usuario, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${usuario.nome}</td>
        <td>${usuario.email}</td>
        <td>${usuario.idade}</td>
    `;
    tabelaUsuarios.appendChild(linha);
});
})
.catch(error => console.error("Erro ao carregar os dados:", error));



//Exercício 07
//Não consegui fazer o 7, 8 e 9



