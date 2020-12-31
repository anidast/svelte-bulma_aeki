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
			<table class="table is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th class="has-text-grey ">Produk</th>
						<th class="has-text-grey ">Harga</th>
						<th class="has-text-grey ">Kuantitas</th>
						<th class="has-text-grey ">Kualitas</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="columns">
								<div class="column is-4">
									<figure class="image is-48x48">
			              <img src="image/chair.png" alt="chair">
			            </figure>
								</div>
								<div class="column has-text-weight-bold">
									<p>Quart Bel Chair</p>
	          			<p>Kategori :Kursi</p>
								</div>
							</div>
	          </td>
	          <td>Rp. 345.000</td>
	          <td>
	          	<div class="field has-addons">
	          		<div class="columns">
							  	<div class="column">
							  		<input class="mx-0" bind:value={count}>
							  	</div>
                  <div class="column">  
	                  <p class="is-size-5" on:click={plus}>+</p>
	                  <p class="is-size-5" on:click={minus}>-</p>
	                </div>  
                </div>
	          	</div>
	          </td>
	          <td>Rp.345.000</td>
					</tr>
					<tr>
						<td>
							<div class="columns">
								<div class="column is-4">
									<figure class="image is-48x48">
			              <img src="image/chair.png" alt="chair">
			            </figure>
								</div>
								<div class="column has-text-weight-bold">
									<p>Quart Bel Chair</p>
	          			<p>Kategori :Kursi</p>
								</div>
							</div>
	          </td>
	          <td>Rp. 345.000</td>
	          <td>
	          	<div class="field has-addons">
	          		<div class="columns">
							  	<div class="column">
							  		<input class="mx-0" bind:value={count}>
							  	</div>
                  <div class="column">  
	                  <p class="is-size-5" on:click={plus}>+</p>
	                  <p class="is-size-5" on:click={minus}>-</p>
	                </div>  
                </div>
	          	</div>
	          </td>
	          <td>Rp.345.000</td>
					</tr>
					<tr>
						<td>
							<div class="columns">
								<div class="column is-4">
									<figure class="image is-48x48">
			              <img src="image/chair.png" alt="chair">
			            </figure>
								</div>
								<div class="column has-text-weight-bold">
									<p>Quart Bel Chair</p>
	          			<p>Kategori :Kursi</p>
								</div>
							</div>
	          </td>
	          <td><abbr class="has-text-centered"> Rp. 345.000</abbr></td>
	          <td>
	          	<div class="field has-addons">
	          		<div class="columns">
							  	<div class="column">
							  		<input class="mx-0" bind:value={count}>
							  	</div>
                  <div class="column">  
	                  <p class="is-size-5" on:click={plus}>+</p>
	                  <p class="is-size-5" on:click={minus}>-</p>
	                </div>  
                </div>
	          	</div>
	          </td>
	          <td>Rp.345.000</td>
					</tr>
					<tr>
						<td>
							<div class="columns">
								<div class="column is-4">
									<figure class="image is-48x48">
			              <img src="image/chair.png" alt="chair">
			            </figure>
								</div>
								<div class="column has-text-weight-bold">
									<p>Quart Bel Chair</p>
	          			<p>Kategori :Kursi</p>
								</div>
							</div>
	          </td>
	          <td>Rp. 345.000</td>
	          <td>
	          	<div class="field has-addons">
	          		<div class="columns">
							  	<div class="column">
							  		<input class="mx-0" bind:value={count}>
							  	</div>
                  <div class="column">  
	                  <p class="is-size-5" on:click={plus}>+</p>
	                  <p class="is-size-5" on:click={minus}>-</p>
	                </div>  
                </div>
	          	</div>
	          </td>
	          <td>Rp.345.000</td>
					</tr>
				</tbody>
				<tfoot >
					<tr>
						<td></td>
						<td></td>
						<td class="has-text-weight-bold">Total Keseluruhan</td>
						<td class="has-text-info has-text-weight-bold">Rp. 1.035.000</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<button class="button is-rounded is-link">Checkout</button>
						</td>
					</tr>
				</tfoot>
				
			</table>
	
		</div>
	</div>
	
</section>