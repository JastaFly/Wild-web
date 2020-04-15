let modal = document.getElementsByClassName('modal-window');
let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];
let footer = document.getElementsByTagName('footer')[0];
let shadow = document.getElementsByClassName('shadow')[0];
let persent = 0.5;
let window_number;
$(document).ready(function () {
    $(".slide-one").owlCarousel({
        margin: 50,
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true
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
    console.log(window_number);
    if (window_number == 3) {
        $('.project').slideToggle();
        shadow.style.display = 'none';
        header.style.filter = 'blur(0)';
        main.style.filter = 'blur(0)';
        footer.style.filter = 'blur(0)';
    } else {
        $(modal[window_number]).slideToggle();
        shadow.style.display = 'none';
        header.style.filter = 'blur(0)';
        main.style.filter = 'blur(0)';
        footer.style.filter = 'blur(0)';
    }
}
const show_window = function (number) {
    window_number = number;
    $(modal[window_number]).slideToggle();
    shadow.style.display = 'block';
    header.style.filter = 'blur(10px)';
    main.style.filter = 'blur(10px)';
    footer.style.filter = 'blur(10px';
}

const show_bind = function (elem) {
    let bind = elem.children[3];
    $(bind).slideToggle();
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
            position_text = 'Ебашу прямо в цель!';
            name = 'dima';
            break;
        case 5:
            position_text = 'Хуяк, хуяк и в продакшен!';
            name = 'i';
            break;
    }
    position.innerHTML = position_text;
    foto.src = './img/' + name + '_hov.png';
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
            position_text = 'Директолог';
            name = 'dima';
            break;
        case 5:
            position_text = 'Капитан программист';
            name = 'i';
            break;
    }
    position.innerHTML = position_text;
    foto.src = './img/' + name + '.png';
}
const show_cases = function (elem) {
    let cases = document.getElementsByClassName('cases')[0];
    let absolut_height = cases.scrollHeight;
    let show = elem.getAttribute('show');

    function smooth_height() {
        let height = absolut_height * persent;
        if (show == 0) {
            if (persent <= 1) {
                cases.style.height = height + 'px';
                persent += 0.03;
                setTimeout(smooth_height, 10);
                elem.setAttribute('show', 1);
                elem.innerHTML = 'Скрыть';
            }
        } else if (show == 1) {
            if (persent >= 0.5) {
                cases.style.height = height + 'px';
                persent -= 0.03;
                setTimeout(smooth_height, 10);
                elem.setAttribute('show', 0);
                elem.innerHTML = 'Показать ещё';
            }
        }
    }

    smooth_height();
}
const show_project = function (elem) {
    let name = elem.getAttribute('name');
    let project_img = document.getElementsByClassName('project__img')[0];
    let project_container = document.getElementsByClassName('project')[0];
    project_img.src = './img/cs-' + name + '.jpg';
    $(project_container).slideToggle();
    window_number = 3;
    header.style.filter = 'blur(10px)';
    main.style.filter = 'blur(10px)';
    footer.style.filter = 'blur(10px)';
    shadow.style.display = 'block';
    console.log(window_number);
}