$('.filter input[type=checkbox][name]').change(function () {
    var parent = $(this).closest('p');
    var checkedInputsCount = parent.find('input[type=checkbox][name]:checked').length;
    var inputsCount = parent.find('input[type=checkbox][name]').length;
    if (checkedInputsCount == inputsCount) {
        parent.find('.filter__select-all input').prop('checked', true);
    } else {
        parent.find('.filter__select-all input').prop('checked', false);
    }
    sendFilterForm();
});

$('.filter__select-all input').change(function () {
    if ($(this).is(':checked')) {
        $(this).closest('p').find('input[type=checkbox][name]').prop('checked', true);
    } else {
        $(this).closest('p').find('input[type=checkbox][name]').prop('checked', false);
    }
    sendFilterForm();
});

function sendFilterForm() {
    var form = $('.filter form');
    $.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: form.attr('method'),
        success: function (data) {
            $('.content__main-column').html($(data).find('.content__main-column').html());
            $('.filter__result').html($(data).find('.filter__result').html());
        },
        error: function (err, status) {
            console.log('error');
        }
    });
}
