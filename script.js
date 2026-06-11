// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de "Descubra Como"
    const botaoConhecer = document.getElementById("btn-conhecer");
    
    // Seleciona a seção para onde a página deve rolar
    const secaoSobre = document.getElementById("sobre");

    // Adiciona o evento de clique
    botaoConhecer.addEventListener("click", function() {
        secaoSobre.scrollIntoView({ 
            behavior: "smooth" // Faz a rolagem ser suave
        });
    });
});
