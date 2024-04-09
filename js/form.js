

function capturarDados(){

    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const cliente = {
        email,mensagem
    };

    const cJson = JSON.stringify(cliente);

    localStorage.setItem(Date.now().toString(),cJson);

    // fs.writeFileSync('../assets/local/mensagens.json',cJson);
    
    console.log("email",email);
    console.log("mensagem",mensagem);

}