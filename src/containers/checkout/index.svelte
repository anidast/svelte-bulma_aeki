<script>
	import "./index.scss";
	import { apiUrl, user } from "../../stores";

	$: isEmpty = !co;

	let products = [];
	let totalPrice = 0;
	let co = {
		cart_id: null,
		order_name: null,
		order_phone: null,
		order_address: null,
		order_payment: null,
		order_delivery: null,
		order_fee: null,
	};

	const formatRupiah = (money) => {
		return new Intl.NumberFormat("id-ID").format(money);
	};

	const getcart = (async () => {
		const response = await fetch(apiUrl + "cart/" + $user.id, {
			method: "GET",
		});
		let res = await response.json();
		if (response.status == 200) {
			co.cart_id = res.data.cart_id;
			products = res.data.products;
			products.forEach((product) => {
				totalPrice += product.product_price * product.qty;
			});
			co.order_fee = totalPrice + 19000;
		}
	})();

	function cetakInvoice() {
		const invoice = (async () => {
			const response = await fetch(apiUrl + "order/" + $user.id, {
				method: "POST",
				responseType: 'blob',
				body: JSON.stringify(co),
			})
			.then(response => {
				if (response.status == 200) {
				const downloadUrl = window.URL.createObjectURL(
					new Blob([response])
				);
				const link = document.createElement("a");
				link.href = downloadUrl;
				link.setAttribute("download", "Invoice.pdf");
				document.body.appendChild(link);
				link.click();
				link.remove();
			}
			});
		})();
	}
</script>

<section class="section">
	<div class="hero-body">
		<p class="has-text-weight-bold is-size-3">Checkout</p>
		<hr />
		<div class="columns">
			<div class="column is-half">
				<div class="">
					<div class="card-content">
						<label class="label is-size-5">Alamat Pengiriman</label>
						<hr />
						<div class="field">
							<div class="control">
								<input
									class="input"
									bind:value={co.order_name}
									type="text"
									placeholder="Masukkan Nama Lengkap" />
							</div>
						</div>
						<div class="field">
							<div class="control">
								<input
									class="input"
									bind:value={co.order_phone}
									type="text"
									placeholder="Masukkan Nomor Telepon" />
							</div>
						</div>
						<div class="field">
							<div class="control">
								<textarea
									class="textarea"
									bind:value={co.order_address}
									placeholder="Masukkan Alamat Lengkap" />
							</div>
						</div>
						<div class="field mt-5">
							<label class="label is-size-5">Opsi Pengiriman</label>
							<div class="control">
								<div class="select">
									<select bind:value={co.order_delivery}>
										<option value="JNE Express">
											JNE Express
										</option>
										<option value="J&T Express">
											J&T Express
										</option>
										<option value="Si Cepat">
											Si Cepat
										</option>
										<option value="ID Express">
											ID Express
										</option>
									</select>
								</div>
							</div>
						</div>
						<div class="field mt-5">
							<label class="label is-size-5">Metode Pembayaran</label>
							<div class="control">
								<div class="select">
									<select bind:value={co.order_payment}>
										<option value="Bank Mandiri">
											Bank Mandiri
										</option>
										<option value="Bank BNI">
											Bank BNI
										</option>
										<option value="Bank BCA">
											Bank BCA
										</option>
										<option value="Bank BRI">
											Bank BRI
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="column mx-5 mt-2">
				<div class="card has-background-primary-light px-4 pt-2">
					<div class="card-content is-size-5">
						<p class="has-text-weight-bold">Pesanan Anda</p>
						<div class="hr-pesanan" />
						<table
							class="table has-background-primary-light is-fullwidth">
							<thead>
								<tr>
									<th class="has-text-grey font-th">
										Produk
									</th>
									<th
										class="has-text-grey has-text-right font-th">
										Total
									</th>
								</tr>
							</thead>
							<tbody class="has-text-grey font-th">
								{#each products as product}
									<tr>
										<td>{product.product_name}</td>
										<td class="has-text-right">
											{'Rp. ' + formatRupiah(product.product_price * product.qty)}
										</td>
									</tr>
								{/each}
							</tbody>
							<tfoot>
								<tr class="font-tfoot">
									<td>SUBTOTAL</td>
									<td class="has-text-grey has-text-right">
										{'Rp. ' + formatRupiah(totalPrice)}
									</td>
								</tr>
								<tr class="font-tfoot">
									<td>BIAYA PENGIRIMAN</td>
									<td class="has-text-grey has-text-right">
										Rp. 19.000
									</td>
								</tr>
								<tr class="font-tfoot">
									<td>TOTAL</td>
									<td class="has-text-grey has-text-right">
										{'Rp. ' + formatRupiah(totalPrice + 19000)}
									</td>
								</tr>
							</tfoot>
						</table>
						<div class="my-4 has-text-centered">
							<button
								class="button is-link is-rounded has-text-weight-bold has-text-centered"
								on:click={cetakInvoice}
								disabled={isEmpty}>Cetak Invoice</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
