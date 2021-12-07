ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.724833, 55.944174],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('click', function(){
        myMap.behaviors.enable('scrollZoom')
        })
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'РАВТ',
            balloonContent: 'Автосоюз РАВТ'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ravt.png',
            // Размеры метки.
            iconImageSize: [80, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -50]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});