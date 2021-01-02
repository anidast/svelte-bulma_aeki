<script>
	import "./index.scss";
	import { apiUrl, user } from "../../stores";
	import { Link } from "svelte-routing";

	let id_products;
	let products = [];
	let itemPrice = [];
	let allPrice = 0;
	let id_cart;
	let count = [];
	const getproducts = (async () => {
		const response = await fetch(apiUrl + "cart/" + $user.id, {
			method: "GET",
		});
		let res = await response.json();
		if (response.status == 200) {
			id_products = res.data.products;
			id_cart = res.data.cart_id;
			id_products.forEach(product =>{
				itemPrice = [...itemPrice, product.product_price * product.qty];
				allPrice += product.product_price * qty;
				count = [...count, product.qty];
				const gbsp = (async () => {
                    const response2 = await fetch(apiUrl + "product/" + product.product_id, {
                        method: "GET",
                    });
                    let res2 = await response2.json();
                    if (response.status == 200) {
                        products = [...products, res2.data]
                    }
                })();
			});
		}
	})();
	
	//dummy
	// let products = [
	// 	{
	// 		product_name: "Eames Replica Chair - Pink",
	// 		product_price: 120500,
	// 		product_category: "chair",
	// 		product_photos: [
	// 			{
	// 				photo_url: "localhost:5000/image/chair.png",
	// 			},
	// 		],
	// 		id: 12,
	// 	},
	// 	{
	// 		product_name: "Wood Chair",
	// 		product_price: 130000,
	// 		product_category: "chair",
	// 		product_photos: [
	// 			{
	// 				photo_url: "localhost:5000/image/chair2.png",
	// 			},
	// 		],
	// 		id: 12,
	// 	},
	// ];

	// let itemPrice = [120500, 130000];
	// let allPrice = 250500;
	// let count = [1, 1];
	//end of dummy

	function minus(i, id, price) {
		count[i] -= 1;
		itemPrice[i] -= price;
		allPrice -= price;
		const minus = (async () => {
			const response = fetch(apiUrl + "cart/delete", {
				method: "DELETE",
				body: JSON.stringify({
					cart_id: id_cart,
					product_id: id,
					quantity: 1,
				}),
			});
			console.log(response);
		})();
	}

	function plus(i, id, price) {
		count[i] += 1;
		itemPrice[i] += price;
		allPrice += price;
		const plus = (async () => {
			const response = fetch(apiUrl + "cart/add", {
				method: "POST",
				body: JSON.stringify({
					cart_id: id_cart,
					product_id: id,
					quantity: 1,
				}),
			});
			console.log(response);
		})();
	}

	const formatRupiah = (money) => {
		return new Intl.NumberFormat("id-ID").format(money);
	};
</script>

<section class="section">
	<div class="hero-body">
		<div class="container is-widescreen">
			<table class="table is-hoverable is-fullwidth mt-4">
				<thead>
					<tr>
						<th class="has-text-grey ">Produk</th>
						<th class="has-text-grey has-text-right">Harga</th>
						<th class="has-text-grey has-text-right" width="20%">
							Kuantitas
						</th>
						<th class="has-text-grey has-text-centered">Total</th>
					</tr>
				</thead>
				<tbody>
					{#each products as product, i}
						<tr>
							<td>
								<div class="columns ">
									<div class="column is-4 mb-5">
										<figure class="image is-48x48">
											<img
												src={'http://' + product.product_photos[0].photo_url}
												alt={product.product_name} />
										</figure>
									</div>
									<div class="column mt-3">
										<p class="title-cart is-size-6">
											{product.product_name}
										</p>
										<p class="subtitle is-size-7 mt-1">
											{'Kategori : ' + product.product_category}
										</p>
									</div>
								</div>
							</td>
							<td>
								<p
									class="mt-5 has-text-right"
									style="margin-right:-20px!important">
									{'Rp. ' + formatRupiah(product.product_price)}
								</p>
							</td>
							<td>
								<div class="field has-addons">
									<div class="columns has-text-righ">
										<div class="column mt-4">
											<input
												class="kotak-count"
												bind:value={count[i]} />
										</div>
										<div class="column">
											<div
												class=" mt-3 is-size-6"
												on:click={() => plus(i, product.id, product.product_price)}>
												<a>+</a>
											</div>
											<div
												class=" tanda-minus is-size-5"
												on:click={() => minus(i, product.id, product.product_price)}>
												<a>-</a>
											</div>
										</div>
									</div>
								</div>
							</td>
							<td>
								<p class="mt-5 has-text-centered">
									{'Rp. ' + formatRupiah(itemPrice[i])}
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td />
						<td />
						<td class="has-text-weight-bold has-text-centered">
							Total Keseluruhan
						</td>
						<td
							class="has-text-info has-text-weight-bold has-text-centered">
							{'Rp. ' + formatRupiah(allPrice)}
						</td>
					</tr>
					<tr>
						<td />
						<td />
						<td />
						<td>
							<div class="has-text-centered">
								<Link to="checkout">
									<button
										class="button is-rounded is-link is-uppercase btn-ck mt-4">Checkout</button>
								</Link>
							</div>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</section>
