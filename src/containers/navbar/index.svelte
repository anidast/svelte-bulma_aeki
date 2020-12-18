<script lang="ts">
	import "./index.scss";
    import { onMount } from "svelte";
  
	onMount(async () => {
	  // START JS NAVBAR HAMBURGER
		// Get all "navbar-burger" elements
		let _navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);
		// Check if there are any navbar burgers
		if (_navbarBurgers.length > 0) {
		  // Add a click event on each of them
		  _navbarBurgers.forEach(function(_el) {
			_el.addEventListener("click", function() {
			  // Get the target from the "data-target" attribute
			  let target = _el.dataset.target;
			  let _target = document.getElementById(target);
  
			  // Toggle the class on both the "navbar-burger" and the "navbar-menu"
			  _el.classList.toggle("is-active");
			  _target.classList.toggle("is-active");
			});
		  });
		};
		document.querySelectorAll(".navbar-link").forEach(function(navbarLink) {
		  navbarLink.addEventListener("click", function() {
			navbarLink.nextElementSibling.classList.toggle("is-hidden-mobile");
		  });
		});
	  // END JS NAVBAR HAMBURGER
	});
</script>
  
<!-- svelte-ignore a11y-missing-attribute -->
<nav class="navbar is-transparent is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
	<div class="navbar-brand py-4">
	  <a class="navbar-item has-text-black is-uppercase is-size-4 mx-5" href="/">
		<img src="image/logo.png" alt="logo AEKI">
	  </a>
	  <a
	  role="button"
	  class="navbar-burger burger"
	  aria-label="menu"
	  aria-expanded="false"
	  data-target="navbarBasicExample">
	  <span aria-hidden="true" />
	  <span aria-hidden="true" />
	  <span aria-hidden="true" />
	</a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
	<div class="navbar-start is-size-5 has-text-weight-medium">
        <a href="/" class="navbar-item">Home</a>
        <a href="catalog" class="navbar-item">Catalog</a>
	</div>
	<div class="navbar-end">
        <div class="navbar-item">
            <a href="cart"><i class="fa fa-shopping-cart" /></a>
        </div>
        <div class="navbar-item has-dropdown">
            <a class="navbar-link">
                <i class="fa fa-user" />
            </a>
            <div class="navbar-dropdown">
                <a href="login" class="navbar-item">
                Login
                </a>
                <a href="register" class="navbar-item">
                Register
                </a>
            </div>
        </div>
    </div>
</nav>