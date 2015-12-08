$('a.js-scrollto[href^=#]').each(function() {
  var $target = $(this.hash);

  $(this).on('click', function() {
    if ($target.length > 0) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 'slow');
    }
    return false;
  });
});


// запрос на валидацию формы
function sendForm(form_DOM, successHandler, errorHandler) {
  jQuery.ajax({
    url: form_DOM.attr('action'),
    type: form_DOM.attr('method'),
    dataType: 'json',
    data: form_DOM.serialize(),
    success: function(response) {
      if (response.success) {
        form_DOM.find('.error-summary').remove();
        successHandler(response);
      } else {
        form_DOM.find('.error-summary').remove();
        form_DOM.prepend('<div class="error-summary format">' + response.errorSummary + '</div>');
        form_DOM.find('.error').removeClass('.error');
        for (var k in response.fields) {
          form_DOM.find('[name="' + response.object + '[' + k + ']"]').addClass('error');
        }
        if (errorHandler) {
          errorHandler(response);
        }
      }
    },
    error: function(response) {
      form_DOM.find('.error-summary').remove();
      form_DOM.prepend('<div class="error-summary format">Ошибка при отправке формы, попробуйте еще раз.</div>');
    },
    cache: false
  });
}

function yandexGoal_showPhone(masterID) {
  yaCounter21591305.reachGoal("show_number", {
    "master": masterID
  });
  return true;
}

$('a.scrollto[href^=#]').each(function() {
  var $target = $(this.hash);

  $(this).on('click', function() {
    if ($target.length > 0) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 'slow');
    }
    return false;
  });
});
var app = angular.module('shoesPrj', ['checklist-model', 'LocalStorageModule']);

app.run(function($rootScope){
  $rootScope.openPopup = function () {
    $rootScope.showPopup = true;
  };
  $rootScope.closePopup = function (){
    $rootScope.showPopup = false;
  };
  $rootScope.showPopup = false;
  $rootScope.isGuest = false;

});

app.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('shoesPrj')
    .setStorageType('localStorage')
    .setNotify(true, true)
});

app.service('BasketService', function(localStorageService) {
  this.getTotalPrice = function() {
    var sum = 0;
    for (var i = 0; i < this.goods.length; i++) {
      sum += +this.goods[i]['price'] * +this.goods[i]['count'];
    }
    return sum;
  };

  this.getGoods = function () {
    var result = JSON.parse(localStorageService.get('basket'));
    if (!result){
      return [];
    }
    return result;
  };

  this.goods = this.getGoods();
  this.totalPrice = this.getTotalPrice();



  this.save = function() {
    localStorageService.set('basket', JSON.stringify(this.goods));
    this.totalPrice = this.getTotalPrice();
  };

  this.add = function(obj) {
    if (!this.goods) {
      this.goods = [obj];
      this.save();
      this.totalPrice = 0;
      return;
    }
    for (var i = 0; i < this.goods.length; i++) {
      if (this.goods[i]['goodID'] == obj['goodID'] && this.goods[i]['sizeID'] == obj['sizeID']) {
        this.goods[i]['count']++;
        this.save();
        return;
      }
    }
    this.goods.push(obj);
    this.save();
    return;
  };

  this.delete = function(goodID, sizeID) {
    if (!this.goods) {
      return;
    }
    for (var i = 0; i < this.goods.length; i++) {
      if (this.goods[i]['goodID'] == goodID && this.goods[i]['sizeID'] == sizeID) {
        this.goods.splice(i, 1);
        this.save();
        return;
      }
    }
  };
  this.updateCount = function(goodID, sizeID, count) {
    if (!this.goods) {
      return;
    }
    for (var i = 0; i < this.goods.length; i++) {
      if (this.goods[i]['goodID'] == goodID && this.goods[i]['sizeID'] == sizeID) {
        this.goods[i]['count'] = count;
        this.save();
        return;
      }
    }
  }
});

app.service('GoodsService', function($http) {
  this.apiServer = 'http://shoes.local';
  this.search = function() {
    return [{
      id: '1',
      name: 'name',
      seasonName: 'summer',
      genderName: 'boy',
      sizes: [{
        id: '1',
        name: '21'
      }, {
        id: '2',
        name: '22'
      }],
      brand: {
        name: 'brand'
      }
    }];
  };
  this.filter = {
    sizes: [],
    genders: [],
    seasons: [],
    brands: []
  };
  this.goods = this.search();
});
