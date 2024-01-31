$(document).ready(function () {
    
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<a>${novaTarefa}</a>`).appendTo(novoItem);
        $('<br>').appendTo('ul');
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
        });
    
        $('ul').on('click', 'li a', function (e) {
        e.preventDefault();
        $(this).toggleClass('linha-atravessada');
    });
});
