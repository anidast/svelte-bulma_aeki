<script>
	import "./index.scss";
</script>

<section class="section">
	<div class="hero-body">
		<p class="has-text-weight-bold is-size-3">Checkout</p> 
		<hr>
		<div class="columns">
			<div class="column is-half">
				<div class="">
					<div class="card-content">
						<label class="label is-size-5">Alamat Pengiriman</label>
						<hr>
						<div class="field">
							<div class="control">
								<input class="input" type="text" placeholder="Masukkan Nama Lengkap">
							</div>
						</div>
						<div class="field">
							<div class="control">
								<input class="input" type="text" placeholder="Masukkan Nomor Telepon">
							</div>
						</div>
						<div class="field">
							<div class="control">
								<textarea class="textarea" placeholder="Masukkan Alamat Lengkap"></textarea>
							</div>
						</div>
						<div class="field mt-5">
							<label class="label is-size-5">Opsi Pengiriman</label>
							<div class="control">
								<div class="select">
									<select>
										<option>JNE Express</option>
										<option>J&T Express</option>
										<option>Si Cepat</option>
										<option>ID Express</option>
									</select>
								</div>
							</div>
						</div>
						<div class="field mt-5">
							<label class="label is-size-5">Metode Pembayaran</label>
							<div class="control">
								<div class="select">
									<select>
										<option>Bank Mandiri</option>
										<option>Bank BNI</option>
										<option>Bank BCA</option>
										<option>Bank BRI</option>
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
						<div class="hr-pesanan"></div>
						<table class="table has-background-primary-light is-fullwidth">
						  <thead>
						    <tr>
						      <th class="has-text-grey font-th">Produk</th>
						      <th class="has-text-grey has-text-right font-th">Total</th>
						    </tr>
						  </thead>
						  <tbody class="has-text-grey font-th">
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="has-text-right">Rp. 345.000</td>
						  	</tr>
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="has-text-right">Rp. 345.000</td>
						  	</tr>
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="has-text-right">Rp. 345.000</td>
						  	</tr>
						  </tbody>
						  <tfoot>
						  	<tr class="font-tfoot">
						  		<td>SUBTOTAL</td>
						  		<td class="has-text-grey has-text-right">Rp. 1.035.000</td>
						  	</tr>
						  	<tr class="font-tfoot">
						  		<td>BIAYA PENGIRIMAN</td>
						  		<td class="has-text-grey has-text-right">Rp. 19.000</td>
						  	</tr>
						  	<tr class="font-tfoot">
						  		<td>TOTAL</td>
						  		<td class="has-text-grey has-text-right">Rp. 1.054.000</td>
							  </tr>
						  </tfoot>
						</table>
						<div class="my-4 has-text-centered">
							<button class="button is-link is-rounded has-text-weight-bold has-text-centered">Cetak Invoice</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>