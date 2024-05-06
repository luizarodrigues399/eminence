window.onload = () => {

    let elementos = document.getElementsByClassName("pergunta");

    for (let elemento = 0; elemento < elementos.length; elemento++) {

        elementos[elemento].addEventListener("click", function() {
            
            this.classList.toggle("pergunta-ativa");

            let conteudo = this.nextElementSibling;

            conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
        });
    }
}

function irParaHotmart(){
    window.open("https://hotmart.com/en/marketplace/products/ingles-com-prof-nativo-baseado-em-conversacao/S92883650C", "_blank");
}

function irParaElemento(nomeClasse){

    document.querySelector(`.${nomeClasse}`).scrollIntoView();
}

function irParaElementoEFechar(nomeClasse){

    document.querySelector(`.${nomeClasse}`).scrollIntoView();

    document.querySelector('.sidebar').classList.toggle("abrir-sidebar");
}

function direcionarInstagram(){

    window.open("https://www.instagram.com/collinsemeritus", "_blank");
}

function direcionarWhatsapp(){

    window.open("https://wa.me/553188662466?text=Quero+saber+mais+sobre+aula+de+ingl%C3%AAs", "_blank");
}

function direcionarGoogleMapsAvaliacoes(nome){
    let url = '';

    if (nome == 'rachele')
        url = 'https://maps.app.goo.gl/o4Kzcmwv2Syg5shx9';

    else if (nome == 'rose') 
        url = 'https://maps.app.goo.gl/uZshfrtK2AkixPtU7';

    else if (nome == 'gil') 
        url = 'https://maps.app.goo.gl/Qo19xUYsiwpQqjfy7';

    else if (nome == 'povinha') 
        url = 'https://maps.app.goo.gl/oavDeLpbyVRzxmpTA';

    else if (nome == 'humberto') 
        url = 'https://maps.app.goo.gl/WXg5gveqWGCvqFbA8';

    else if (nome == 'gizeli') 
        url = 'https://maps.app.goo.gl/RAqPHnMyPAXgr8qS7';

    window.open(url, "_blank");
}

function toggleSidebar() {

    document.querySelector('.sidebar').classList.toggle("abrir-sidebar");
}