
    const tabelaUsuariosGet = document.getElementById("tabelaUsuariosGet");
    const tabelaUsuariosPost = document.getElementById("tabelaUsuariosPost");
    const formulario = document.getElementById("cadastroUsuarios");

    var usuariosCadastrados = [];

    // Função para sessão listar Dados(GET)
    function carregarUsuarios() {
        fetch("http://demo4686746.mockable.io/")
            .then((res) => res.json())
            .then((data) => {
                data.usuarios.forEach((usuario, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <th scope="row">${usuario.id}</th>
                        <td>${usuario.nome}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.idade}</td>
                    `;
                    tabelaUsuariosGet.appendChild(row);
                });
            })
            .catch(error => console.error("Erro ao carregar usuários:", error));
    }
    carregarUsuarios();



    // Evento de envio do formulário (POST)
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const idade = document.getElementById("idade").value.trim();

        var novoId = 1;
        if (usuariosCadastrados.length > 0) {
            const ids = usuariosCadastrados.map(user => user.id);
            novoId = Math.max(...ids) + 1;
        }

        // Objeto Usuários
        const novoUsuario = {
            id: novoId,
            nome: nome,
            email: email,
            idade: idade
        };

        // Simula o envio via POST (usando JSONPlaceholder)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoUsuario)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Usuário cadastrado:", data);

            // Adiciona o usuário no array local
            usuariosCadastrados.push(novoUsuario);

            // Adiciona o usuário na tabela de POST
            const row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${novoUsuario.id}</th>
                <td>${novoUsuario.nome}</td>
                <td>${novoUsuario.email}</td>
                <td>${novoUsuario.idade}</td>
            `;
            tabelaUsuariosPost.appendChild(row);
        })
        .catch(error => console.error("Erro ao cadastrar usuário:", error));

        // Limpa os campos do formulário
        formulario.reset();
    });

