var select = document.querySelector('.main')
    , auto = document.querySelector('.auto')
    , cars = {
        chavy: [1, 2, 3]
        , toyouta: [4, 5, 6]
        , gmc: [7, 8, 9]
    };
select.onchange = function () {
    var selectItem = this.value;
    auto.length = 0;
    for (var i = 0; i < cars[selectItem].length; i++) {
        var option = new Option(cars[selectItem][i], cars[selectItem][i]);
        auto.appendChild(option);
    }
}