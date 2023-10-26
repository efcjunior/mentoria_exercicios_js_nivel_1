function exibirNome() {
    let nome = prompt('What is your name?');
    let h3 = document.getElementsByTagName('h3')[0];
    h3.innerHTML = nome;
    console.log(h3);
}