let modal = document.getElementsByClassName('modal-window');
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];
let footer = document.getElementsByTagName('footer')[0];
let shadow = document.getElementsByClassName('shadow')[0];
$(document).ready(function () {
    $(".slide-one").owlCarousel({
        margin: 50,
        items: 1,
        loop: true,
        nav: true,
        dots: true
    });

    $(".slide-two").owlCarousel({
        margin: 20,
        items: 5,
        loop: true,
        nav: true,
        autoWidth: true
    });

    $('.form').submit(function () {
        let m = this.hasAttribute('message');
        console.log(m);
        let name = this.name.value;
        let number = this.telephone.value;
        if (m === true) {
            var message = this.message.value;
        } else {
            message = 'Сообщения нет';
        }
        let data = {
            'name': name,
            'phone': number,
            'message': message
        }
        window_form = this.hasAttribute('modal');
        if (window_form === true) {
            console.log(window_form);
        }
        $(modal[0]).slideToggle();
        header.style.filter = 'blur(10px)';
        main.style.filter = 'blur(10px)';
        footer.style.filter = 'blur(10px)';
    });
});

const close_window = function (number) {
    $(modal[number]).slideToggle();
    shadow.style.display = 'none';
    header.style.filter = 'blur(0)';
    main.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
}
const show_window = function (number) {
    $(modal[number]).slideToggle();
    shadow.style.display = 'block';
    console.log(shadow);
    header.style.filter = 'blur(10px)';
    main.style.filter = 'blur(10px)';
    footer.style.filter = 'blur(10px';
}
const show_bind = function (elem) {
    let bind = elem.children[2];
    $(bind).slideToggle();
    console.log(bind);
}

const team_hov = function (elem, number) {
    let position_text;
    let name;
    let position = elem.children[1];
    let foto = elem.children[2];
    switch (number) {
        case 1:
            position_text = 'Алло, бля!';
            name = 'maks';
            break;
        case 2:
            position_text = 'Ща заебеним!';
            name = 'slava';
            break;
        case 3:
            position_text = 'Заявки Ннда?';
            name = 'maks-ageev';
            break;
        case 4:
            position_text = 'Хуяк, хуяк и в продакшен!';
            name = 'dima';
            break;
    }
    position.innerHTML = position_text;
    foto.src = './img/' + name + '_hov.png';
    console.log(position);
}

const team_off = function (elem, number) {
    let position_text;
    let name;
    let position = elem.children[1];
    let foto = elem.children[2];
    switch (number) {
        case 1:
            position_text = 'Руководитель отдела продаж';
            name = 'maks';
            break;
        case 2:
            position_text = 'Главный дизайнер';
            name = 'slava';
            break;
        case 3:
            position_text = 'Руководитель отдела маркетинга';
            name = 'maks-ageev';
            break;
        case 4:
            position_text = 'Капитан программист';
            name = 'dima';
            break;
    }
    position.innerHTML = position_text;
    foto.src = './img/' + name + '.png';
    console.log(position);
}