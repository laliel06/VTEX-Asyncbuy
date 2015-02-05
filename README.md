# VTEX Asynchronous Buy

Compras de forma assíncrona direto da prateleira


## Uso

Chame o plugin em qualquer página `html` ou no código `javascript` principal das páginas:

	$('body').asyncBuy({parameters});

### Parâmetros 

- <b>`plus`</b> Elemento DOM do seletor que adiciona mais um na quantidade
- <b>`minus`</b> Elemento DOM do seletor que remove um na quantidade
- <b>`max`</b> Número maximo permitido no controle de quantidade
- <b>`buyBtn`</b> Elemento DOM do botão comprar


## Alterações Necessárias

1.Substituir o trecho de código de botão comprar de seu `template de prateleira` pelo seguinte:

	<div class="bx-quantity">
		<label>Quantidade:</label>
		<div class="quantity">
			<span class="bt-menos">-</span>
			<input type="text" name="quantity" class="qtd" value="1" />
			<span class="bt-mais">+</span>
		</div>
	</div>

	<div class="btn-comprar-vitrine">
		<div class="shelf-button clearfix">
			<div class="comprarNow">
				$product.BottomBuyAsynchronous
				$product.AmountInCart
			</div>
		</div>
	</div>

2.Verificar se existe o Plugin de [Minicart] no controle de Carrinho do site

3.Adicionar no `Configurações > SistemaSEO` no admin do site, o seguinte trecho de código: 

	Disallow: /checkout/cart/add?sku=0&qty=1&sc=1



