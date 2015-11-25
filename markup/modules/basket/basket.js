app.controller('BasketController', function ($scope, localStorageService) {
    localStorageService.set('test', 'test');
    alert(localStorageService.get('test'));
});

var Basket = {
    block: false,
    add: function (goodID, sizeID) {
        $.ajax({
            url: this.getAddUrl(),
            data: { goodID: goodID, sizeID: sizeID },
            dataType: 'json',
            success: function (data) {
                if (data) {
                    this.render(data);
                }
            }.bind(this)
        });
        console.log('add in basket');
    },
    delete: function (id) {
        console.log('delete from basket');
        $.ajax({
            url: this.getDeleteUrl(),
            data: { id: id },
            dataType: 'json',
            success: function (data) {
                this.getElement(id).remove();
            }.bind(this)
        });
    },
    updateCount: function (id, count) {
        console.log('set count');
        $.ajax({
            url: this.getUpdateUrl(),
            data: { id: id, count: count },
            dataType: 'json',
            success: function (data) {
                this.render(data);
            }.bind(this)
        });
        return false;
    },
    render: function (el) {
        console.log('render');
        $('.basket').html($(el).html());

    },
    check: function (goodID, sizeID) {
        console.log('check');
        return false;
    },
    getElement: function (id) {
        return $('.product-card-micro[data-basket-id=' + id + ']');
    },
    getAddUrl: function () {
        return $('.basket').attr('data-add-url');
    },
    getDeleteUrl: function () {
        return $('.basket').attr('data-delete-url');
    },
    getUpdateUrl: function () {
        return $('.basket').attr('data-update-url');
    }
};
