const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

var lista_tipo_anterior = 'inicio';

$('.list').on('click', function () {

    var lista_tipo = $(this).data('tipo');

    if (!$('.card-' + lista_tipo).is(':visible')) {

        $('.card-' + lista_tipo_anterior).find('i').animate({ width: 'toggle' }, 350)

        $('.card').slideUp('slow').promise().done(function () {

            $('.card-' + lista_tipo).slideDown('slow', function () {

                $('.card-' + lista_tipo).find('i').animate({ width: 'toggle' }, 350);


            });

        });


        lista_tipo_anterior = lista_tipo;

    }

});

// let menutoggle = document.querySelector('.toggle');
// menutoggle.onclick = function() {
//     menutoggle.classList.toggle('active');

// }

let menutoggle = $('.toggle');

menutoggle.on('click', function() {

    var toggle = $(this);

    toggle.toggleClass('active');

    $('.navigation').animate({ width: 'toggle' }, 350);
})