$('html').on('click', '.js-basket-delete', function () {
    Basket.delete($(this).closest('.product-card-micro').attr('data-basket-id'));
    return false;
});

$('html').on('click', '.js-basket-count-plus', function () {
    var input = $(this).siblings('.js-basket-count-input');
    input.val(+input.val() + 1);
    Basket.updateCount($(this).closest('.product-card-micro').attr('data-basket-id'), input.val());
    return false;
});

$('html').on('click', '.js-basket-count-minus', function () {
    var input = $(this).siblings('.js-basket-count-input');
    var count = +input.val() - 1;
    if (count < 1) {
        count = 1;
    }
    if (count != input.val()){
        Basket.updateCount($(this).closest('.product-card-micro').attr('data-basket-id'), input.val());
    }
    input.val(count);
    return false;
});

$('html').on('change', '.js-basket-count-input', function () {
    if (+$(this).val() < 1){
        $(this).val(1);
    }
    Basket.updateCount($(this).closest('.product-card-micro').attr('data-basket-id'), $(this).val());
});
