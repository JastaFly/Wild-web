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
        let modal = document.getElementsByClassName('modal-window');
        $(modal[0]).slideToggle();
        let header = document.getElementsByTagName('header')[0];
        let main = document.getElementsByTagName('main')[0];
        let footer = document.getElementsByTagName('footer')[0];
        header.style.filter = 'blur(10px)';
        main.style.filter = 'blur(10px)';
        footer.style.filter = 'blur(10px)';
    });
});

const close_window = function (number) {
    let modal = document.getElementsByClassName('modal-window');
    $(modal[number]).slideToggle();
    let header = document.getElementsByTagName('header')[0];
    let main = document.getElementsByTagName('main')[0];
    let footer = document.getElementsByTagName('footer')[0];
    header.style.filter = 'blur(0)';
    main.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';
}
const show_window = function (number) {
    let modal = document.getElementsByClassName('modal-window');
    $(modal[number]).slideToggle();
}



