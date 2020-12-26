<script>
	import "./index.scss";
	let linkFacebook = "";
  let linkInstagram = "";
  let linkYoutube = "";

</script>

<footer class="footer has-background-link">
	<div class="container">
		<div class="columns">
		  <div class="column is-half">
		  	<p class="title is-5">Tentang AEKI</p>
		  	<p class="subtitle">Perusahaan Furniture yang menyediakan banyak produk lengkap perabotan rumah tangga</p>
		  	<p class="subtitle">Jl Rungkut Asri Tengah No.5-7, Rungkut Kidul, Kec. Rungkut, Kota Surabaya, Jawa Timur 60295 (031) 8707329</p>
		  </div>
		  <div class="column">
		  	<p class="title is-5">Kabar Terbaru</p>
		  	<p class="subtitle">Tetap update dengan pembaruan kami</p>
		  	<div class="field has-addons">
				  <div class="control">
				    <input class="input" type="text" placeholder="Masukkan Email Anda">
				  </div>
				  <div class="control">
				    <a class="button is-warning">
				      <a class="icon">
				        <i class="fa fa-arrow-right"/>
				      </a>
				    </a>
				  </div>
				</div>
				<p class="subtitle has-text-warning">Frequently Q&A</p>
		  </div>
		  <div class="column">
		  	<p class="title is-5">Ikuti Kami</p>
		  	<p class="subtitle">Jangan lupa follow akun social media kami</p>
		  	<div class="content">
		      <a class="icon" href={linkFacebook}>
		        <i class="fab fa-facebook fa-2x" />
		      </a>
		      <a class="icon ml-6" href={linkInstagram}>
		        <i class="fab fa-instagram fa-2x" />
		      </a>
		      <a class="icon ml-6" href={linkYoutube}>
		        <i class="fab fa-youtube fa-2x" />
		      </a>
		    </div>
		  </div>
		</div>
		<div class="content is-size-5 has-text-grey-light mt-6">
      <span>
        Copyright&copy;
        <i class="lnr lnr-heart" aria-hidden="true" />
        2020 by Kelompok 3
      </span>
    </div>	
	</div>
</footer>
