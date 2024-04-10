

function capturarDados(){

    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const cliente = {
        email,mensagem
    };

    const cJson = JSON.stringify(cliente);

    //o arquivo e convertido em json e salvo com uma chave de timestamp
    localStorage.setItem(Date.now().toString,cJson);

    console.log("email",email);
    console.log("mensagem",mensagem);

}

function listarDados(){

    console.log("listarDados");

    for(let i = 0; i < localStorage.length;i++){
        const cliente_json = localStorage.getItem(localStorage.key(i))
        console.log(cliente_json);
        if(cliente_json){
            const cliente = JSON.parse(cliente_json)
            document.getElementById('lista').innerText += `\nEmail: ${cliente.email} | Mensagem: ${cliente.mensagem} `
        }
    }

    return lista;
} 