<script>
	import "./index.scss";

	let count = 1;

    function minus(){
        count-=1;
    }

    function plus(){
        count+=1;
    }
</script>

<section class="section">
	<div class="hero-body">
		<div class="container is-widescreen">
			<table class="table is-hoverable is-fullwidth mt-4">
				<thead >
					<tr>
						<th class="has-text-grey ">Produk</th>
						<th class="has-text-grey has-text-right">Harga</th>
						<th class="has-text-grey has-text-right" width="20%">Kuantitas</th>
						<th class="has-text-grey has-text-centered">Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="columns ">
								<div class="column is-4 mb-5">
									<figure class="image is-48x48">
			              				<img src="image/chair.png" alt="chair">
			            			</figure>
								</div>
								<div class="column mt-3">
									<p class="title-cart is-size-6">Quart Bel Chair</p>
	          						<p class="subtitle is-size-7 mt-1">Kategori :Kursi</p>
								</div>
							</div>
	          			</td>
						<td><p class="mt-5 has-text-right" style="margin-right:-20px!important">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons">
	          					<div class="columns has-text-righ">
							  		<div class="column mt-4">
							  			<input class="kotak-count" bind:value={count}>
							  		</div>
									<div class="column">  
										<div class="mt-3 is-size-6" on:click={plus}>+</div>
										<div class="tanda-minus is-size-5" on:click={minus}>-</div>
									</div>  
                				</div>
	          				</div>
	          			</td>
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
					</tr>
					<tr>
						<td>
							<div class="columns ">
								<div class="column is-4 mb-5">
									<figure class="image is-48x48">
			              				<img src="image/chair.png" alt="chair">
			            			</figure>
								</div>
								<div class="column mt-3">
									<p class="title-cart is-size-6">Quart Bel Chair</p>
	          						<p class="subtitle is-size-7 mt-1">Kategori :Kursi</p>
								</div>
							</div>
	          			</td>
	          			<td><p class="mt-5 has-text-right" style="margin-right:-20px!important">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons">
	          					<div class="columns has-text-righ">
							  		<div class="column mt-4">
							  			<input class="kotak-count" bind:value={count}>
							  		</div>
									<div class="column">  
										<div class="mt-3 is-size-6" on:click={plus}>+</div>
										<div class="tanda-minus is-size-5" on:click={minus}>-</div>
									</div>  
                				</div>
	          				</div>
	          			</td>
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
					</tr>
					<tr>
						<td>
							<div class="columns ">
								<div class="column is-4 mb-5">
									<figure class="image is-48x48">
			              				<img src="image/chair.png" alt="chair">
			            			</figure>
								</div>
								<div class="column mt-3">
									<p class="title-cart is-size-6">Quart Bel Chair</p>
	          						<p class="subtitle is-size-7 mt-1">Kategori :Kursi</p>
								</div>
							</div>
	          			</td>
	          			<td><p class="mt-5 has-text-right" style="margin-right:-20px!important">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons">
	          					<div class="columns has-text-righ">
							  		<div class="column mt-4">
							  			<input class="kotak-count" bind:value={count}>
							  		</div>
									<div class="column">  
										<div class="mt-3 is-size-6" on:click={plus}>+</div>
										<div class="tanda-minus is-size-5" on:click={minus}>-</div>
									</div>  
                				</div>
	          				</div>
	          			</td>
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
					</tr>
					<tr>
						<td>
							<div class="columns ">
								<div class="column is-4 mb-5">
									<figure class="image is-48x48">
			              				<img src="image/chair.png" alt="chair">
			            			</figure>
								</div>
								<div class="column mt-3">
									<p class="title-cart is-size-6">Quart Bel Chair</p>
	          						<p class="subtitle is-size-7 mt-1">Kategori :Kursi</p>
								</div>
							</div>
	          			</td>
	          			<td><p class="mt-5 has-text-right" style="margin-right:-20px!important">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons">
	          					<div class="columns has-text-righ">
							  		<div class="column mt-4">
							  			<input class="kotak-count" bind:value={count}>
							  		</div>
									<div class="column">  
										<div class="mt-3 is-size-6" on:click={plus}>+</div>
										<div class="tanda-minus is-size-5" on:click={minus}>-</div>
									</div>  
                				</div>
	          				</div>
	          			</td>
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
					</tr>
				</tbody>
				<tfoot >
					<tr>
						<td></td>
						<td></td>
						<td class="has-text-weight-bold has-text-centered">Total Keseluruhan</td>
						<td class="has-text-info has-text-weight-bold has-text-centered">Rp. 1.035.000</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<div class="has-text-centered">
								<button class="button is-rounded is-link is-uppercase btn-ck mt-4">Checkout</button>
							</div>
						</td>
					</tr>
				</tfoot>
				
			</table>
	
		</div>
	</div>
	
</section>