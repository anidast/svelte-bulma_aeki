<script>
	import "./index.scss";
</script>

<section class="section">
	<div class="hero-body">
		<hr>
		<p class="has-text-weight-bold is-size-3">Checkout</p> 
		<hr>
		<div class="columns">
			<div class="column is-half">
				<div class="card">
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
						<div class="field">
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
						<div class="field">
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
			<div class="column">
				<div class="card has-background-primary-light">
					<div class="card-content is-size-5">
						<p class="has-text-weight-bold">Pesanan Anda</p>
						<hr>
						<table class="table has-background-primary-light is-fullwidth">
						  <thead>
						    <tr>
						      <th><abbr title="Table"class="has-text-grey">Tabel</abbr></th>
						      <th><abbr title="Total" class="has-text-grey is-pulled-right">Total</abbr></th>
						    </tr>
						  </thead>
						  <tbody class="has-text-grey">
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="is-pulled-right">Rp. 345.000</td>
						  	</tr>
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="is-pulled-right">Rp. 345.000</td>
						  	</tr>
						  	<tr>
						  		<td>Quart Bel Chair</td>
						  		<td class="is-pulled-right">Rp. 345.000</td>
						  	</tr>
						  </tbody>
						  <tfoot>
						  	<tr>
						  		<td class="has-text-weight-bold">SUBTOTAL</td>
						  		<td class="is-pulled-right">Rp. 1.035.000</td>
						  	</tr>
						  	<tr>
						  		<td class="has-text-weight-bold">BIAYA PENGIRIMAN</td>
						  		<td class="is-pulled-right">Rp. 19.000</td>
						  	</tr>
						  	<tr>
						  		<td class="has-text-weight-bold">TOTAL</td>
						  		<td class="is-pulled-right">Rp. 1.054.000</td>
						  	</tr>
						  </tfoot>
						</table>
							<button class="button is-link is-rounded has-text-weight-bold">Cetak Invoice</button>
						
					</div>
					
				</div>
					
			</div>
		</div>
	</div>
</section>