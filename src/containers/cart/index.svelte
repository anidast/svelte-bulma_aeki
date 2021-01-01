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
						<th class="has-text-grey has-text-centered">Harga</th>
						<th class="has-text-grey has-text-centered">Kuantitas</th>
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
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
	          			<td>
	          				<!-- <div class="field has-addons"> -->
	          					<div class="columns is-align-items-center">
							  		<div class="column mt-5 kotak">
							  			<input class="mx-0 kotak-count" bind:value={count}>
							  		</div>
									<div class="column mt-5">  
										<p class="is-size-5" on:click={plus}>+</p>
										<p class="is-size-5" on:click={minus}>-</p>
									</div>  
                				</div>
	          				<!-- </div> -->
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
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons ">
	          					<div class="columns">
							  		<div class="column mt-5 has-text-centered">
							  			<input class="mx-0 kotak-count" bind:value={count}>
							  		</div>
									<div class="column mt-5 is-centered">  
										<p class="is-size-5" on:click={plus}>+</p>
										<p class="is-size-5" on:click={minus}>-</p>
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
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons ">
	          					<div class="columns">
							  		<div class="column mt-5 has-text-centered">
							  			<input class="mx-0 kotak-count" bind:value={count}>
							  		</div>
									<div class="column mt-5 is-centered">  
										<p class="is-size-5" on:click={plus}>+</p>
										<p class="is-size-5" on:click={minus}>-</p>
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
	          			<td><p class="mt-5 has-text-centered">Rp. 345.000</p></td>
	          			<td>
	          				<div class="field has-addons ">
	          					<div class="columns">
							  		<div class="column mt-5 has-text-centered">
							  			<input class="mx-0 kotak-count" bind:value={count}>
							  		</div>
									<div class="column mt-5 is-centered">  
										<p class="is-size-5" on:click={plus}>+</p>
										<p class="is-size-5" on:click={minus}>-</p>
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
							<button class="button is-rounded is-link is-uppercase btn-ck mt-4">Checkout</button>
						</td>
					</tr>
				</tfoot>
				
			</table>
	
		</div>
	</div>
	
</section>