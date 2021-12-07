function popup(title, tema) {
    $('.popup-block__title').text(title);
    $('.popup').addClass('popup-visible');

    $('html,body').css({
        'overflow-y': 'hidden'
    });

    $('input[name="topic"]').val(tema);
}

function closePopup() {
    $('.popup').removeClass('popup-visible');
    $('.popup-block__item').css({
        // 'border-bottom': '1px solid #E2E2E2'
    });
    $('.popup-block__item-input').val('');
    $('html,body').css({
        'overflow-y': 'auto'
    });
}

$('.popup')
    .click(function () { // вешаем основной обработчик на родителя
        closePopup();
    })
    .children()
    .click(function (e) { // вешаем на потомков
        e.stopPropagation(); // предотвращаем всплытие
    });

function fosPopupSend() {
    tema = $('input[name="topic"]').val();
    err = 0;

    t1 = $('input[name="name"]').val();
    t2 = $('input[name="phone"]').val();
    t3 = $('textarea[name="text"]').val();

    if(t1 == ''){
        $('input[name="name"]').closest('.popup-block__item').css({'border-bottom':'2px solid red'})
        err = 1;
    } else {
        $('input[name="name"]').closest('.popup-block__item').css({'border-bottom':'1px solid green'})
    }
    if(t2 == ''){
        $('input[name="phone"]').closest('.popup-block__item').css({'border-bottom':'2px solid red'})
        err = 1;
    } else {
        $('input[name="phone"]').closest('.popup-block__item').css({'border-bottom':'1px solid green'})
    }
    if(t3 == ''){
        $('textarea[name="text"]').closest('.popup-block__item').css({'border-bottom':'2px solid red'})
        err = 1;
    } else {
        $('textarea[name="text"]').closest('.popup-block__item').css({'border-bottom':'1px solid green'})
    }

    if(err == 0){
        $.ajax({
            type: "POST",
            url: "ajax/fos-popup.php",
            data: 'name=' + $('input[name="name"]').val() + '&phone=' + $('input[name="phone"]').val() + '&text=' + $('textarea[name="text"]').val() + '&tema=' + tema,
            success: function (response) {
                $('.popup-block').html(response);
            }
        });
    }
};
