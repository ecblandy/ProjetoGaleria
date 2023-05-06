$(document).ready(function () {
    // Chama a função quando o documento está pronto para ser manipulado
    // Pode ser abreviado para $(function() {...})

    $('header button').click(function () {
        // Adiciona um ouvinte de eventos para o botão selecionado usando jQuery
        // Quando o botão é clicado, o código dentro desta função será executado
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function () {
        // Adiciona um ouvinte de eventos para o botão cancelar usando jQuery
        // Quando o botão é clicado, o código dentro desta função será executado
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        // Adiciona um ouvinte de eventos para o formulário selecionado usando jQuery
        // Quando o formulário é enviado, o código dentro desta função será executado
        e.preventDefault(); // Impede que o formulário seja enviado normalmente, para que possamos manipular o envio com JavaScript

        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
        <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val(''); // Usa o seletor correto para limpar o valor do campo
    });
});
