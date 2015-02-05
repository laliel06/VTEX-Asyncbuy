(function ($) {
    "use strict";

    var qtd = 1;

    $.fn.asyncBuy = function (opts) {

        var plus = opts.plus,
            minus = opts.minus,
            max = opts.max || 5,
            buyBtn = opts.buyBtn || '.add a';

        $(plus).click(function () {
            qtd = $(this).parent().find('.qtd').val();
            qtd = parseInt(qtd, 10);

            if (qtd < max) {
                qtd += 1;
                $(this).parent().find('.qtd').val(qtd);
            }
        });

        $(minus).click(function () {
            qtd = $(this).parent().find('.qtd').val();
            qtd = parseInt(qtd, 10);

            if (qtd > 1) {
                qtd -= 1;
            } else {
                qtd = 1;
            }

            $(this).parent().find('.qtd').val(qtd);
        });

        $(buyBtn).click(function (e) {

            e.preventDefault();

            var idProd = $(this).parent().parent().find(".buy-button-asynchronous-defaultsku-id").val(),
                qtFinal = $(this).parent().parent().parent().parent().parent().parent().find('.bx-quantity .qtd').val();

            vtexjs.catalog.getProductWithVariations(idProd).done(function (product) {

                var  link = "/checkout/cart/add?sku=" + product.skus[0].sku + "&qty=" + qtFinal + "&seller=1&redirect=false&sc=1";

                $.ajax({
                    type: 'GET',
                    url: link,
                    crossDomain: true,
                    dataType: 'html',
                    success: function () {

                        //MAYBE WILL HAVE SOMETHING HERE

                        $('.qtd').val(1);
                        qtd = 1;
                    }
                });
            });
        });
    };
}(jQuery));