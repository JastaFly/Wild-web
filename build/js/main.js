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
        autoplay: true,
        autoplayTimeout: 25000
    });

    $(".slide-two").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true
    });
    $(".slider-team").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });
    $(".review-slider").owlCarousel({
        margin: 20,
        items: 1,
        loop: true,
        autoplay: true
    });

    $('.form').submit(function () {
        let m = this.hasAttribute('message');
        let name = this.name.value;
        let number = this.telephone.value;
        let window_form = this.hasAttribute('modal');
        console.log(window_form);
        let what = this.what.value;
        if (m === true) {
            var message = this.message.value;
        } else {
            message = 'Сообщения нет';
        }
        let data = {
            'name': name,
            'phone': number,
            'message': message,
            'what': what
        }
        $.ajax({
            url: "php/mail.php",
            type: "POST",
            data: data,
            dataType: "html",
            success: function (res) {
                console.log(res);
                if (window_form === true) {
                    modal[1].style.display = 'none';
                }
                window_number = 0;
                $(modal[0]).slideToggle();
                shadow.style.display = 'block';
                let header = document.getElementsByTagName('header')[0];
                let main = document.getElementsByTagName('main')[0];
                let footer = document.getElementsByTagName('footer')[0];
                header.style.filter = 'blur(10px)';
                main.style.filter = 'blur(10px)';
                footer.style.filter = 'blur(10px)';
            }
        })
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
    footer.style.filter = 'blur(10px)';
}

const show_bind = function (elem) {
    let old_bind = document.getElementsByClassName('bind_show')[0];
    let bind = elem.children[3];
    let show_class = bind.classList.contains('bind_show');
    console.log(show_class + ' гы');
    if (old_bind !== undefined && show_class == false) {
        $(old_bind).slideToggle();
        old_bind.classList.remove('bind_show');
        console.log(3);
    }
    if (show_class == true) {
        $(bind).slideToggle();
        old_bind.classList.remove('bind_show');
        console.log(1);
    } else {
        $(bind).slideToggle();
        bind.classList.add('bind_show');
        console.log(2);
    }
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
        let device_screen = screen.width;
        let cases_height;
        if (device_screen <= 576) {
            cases_height = 0.2;
        } else {
            cases_height = 0.65;
        }
        if (show == 0) {
            if (persent <= 1) {
                cases.style.height = height + 'px';
                persent += 0.03;
                setTimeout(smooth_height, 10);
                elem.setAttribute('show', 1);
                elem.innerHTML = 'Скрыть';
            }
        } else if (show == 1) {
            if (persent >= cases_height) {
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
};

const what_fn = function (what, modal, elem) {
    let hidden_input;
    let message;
    if (modal == 1) {
        hidden_input = document.getElementsByClassName('modal-window')[1].children[2].children[0];
    }
    else {
        hidden_input = elem.what;
    }
    switch (what) {
        case 1:
            message = 'Рассчитать стоимость';
            break;
        case 2:
            message = 'Получить бесплатный прогноз';
            break;
        case 3:
            message = 'Больше продаж!!!';
            break;
        case 4:
            message = 'Узнать как оно работает?!??';
            break;
        case 5:
            message = 'Уточнить стоимость настройки';
            break;
        case 6:
            message = 'Моя страница не продаёт!!! Проведите аудит и расскажите как выжить из сайта максимум!!!';
            break;
        case 7:
            message = 'Обсудить проект';
            break;
        case 8:
            message = 'У меня возникли вопросы?!?? Напишите мне';
            break;
    }
   hidden_input.value = message;
    console.log(hidden_input);
}