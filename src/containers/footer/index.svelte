<script>
	import "./index.scss";
	let linkFacebook = "";
  let linkInstagram = "";
  let linkYoutube = "";

</script>

<footer class="footer has-background-info-dark">
	<div class="container">
		<div class="columns is-justify-content-center">
		  <div class="column mr-5">
		  	<p class="title is-5 has-text-white has-text-weight-bold">Tentang AEKI</p>
		  	<p class="subtitle has-text-white is-size-6 mt-5">Perusahaan Furniture yang menyediakan banyak produk lengkap perabotan rumah tangga</p>
		  	<p class="subtitle has-text-white is-size-6">Jl Rungkut Asri Tengah No.5-7, Rungkut Kidul, Kec. Rungkut, Kota Surabaya, Jawa Timur 60295 (031) 8707329</p>
		  </div>
		  <div class="column">
		  	<p class="title is-5 has-text-white has-text-weight-bold">Kabar Terbaru</p>
		  	<p class="subtitle has-text-white is-size-6 mt-5">Tetap update dengan pembaruan kami</p>
		  	<div class="field has-addons">
				  <div class="control">
				    <input class="input has-background-grey-lighter has-text-black box-input" type="text" placeholder="Masukkan Email Anda">
				  </div>
				  <div class="control">
				    <a class="button is-warning" href={linkFacebook}>
				      <a class="icon" href={linkFacebook}>
				        <i class="fa fa-arrow-right" style="color:grey"/>
				      </a>
				    </a>
				  </div>
				</div>
				<p class="subtitle has-text-warning is-size-6">Frequently Q&A</p>
		  </div>
		  <div class="column">
		  	<p class="title is-5 has-text-white has-text-weight-bold">Ikuti Kami</p>
		  	<p class="subtitle has-text-white is-size-6 mt-5">Jangan lupa follow akun social media kami</p>
		  	<div class="content">
		      <a class="icon" href={linkFacebook}>
		        <i class="fab fa-facebook fa-2x" style="color:white"/>
		      </a>
		      <a class="icon ml-6" href={linkInstagram}>
		        <i class="fab fa-instagram fa-2x" style="color:white"/>
		      </a>
		      <a class="icon ml-6" href={linkYoutube}>
		        <i class="fab fa-youtube fa-2x" style="color:white"/>
		      </a>
		    </div>
		  </div>
		</div>
		<div class="content is-size-5 has-text-white mt-6">
      <span>
        Copyright&copy;
        <i class="lnr lnr-heart" aria-hidden="true" />
        2020 by Kelompok 3
      </span>
    </div>	
	</div>
</footer>
