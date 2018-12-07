//identificar o clique no menu
//verificar o item que foi clicado e fazer referencia ao alvo
//verificar a distancia entre o alvo e o topo
//animar o scroll até o alvo

$('nav a').click(function(e){
    e.preventDefault(); //ignora a função padrão do html5
    var id = $(this).attr('href'), //identifica qual botão cliquei e faz referencia ao alvo
    targetOffset = $(id).offset().top, //calcula a distancia entre o alvo e o topo
     menuHeight = $('nav').innerHeight(); //pega a altura do menu
    $('html, body').animate({ //chama a animação
        scrollTop: targetOffset - menuHeight //origem (scrollTop): destino (targetOffset) - altura do menu
    }, 500); //define a velocidade da animação
});