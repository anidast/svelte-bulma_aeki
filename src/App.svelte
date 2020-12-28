<script>
	import "./style.scss";
  	import { Router, Route } from "svelte-routing";
	import { Cart, Catalog, Checkout, Home, Login, Product, Register } from "./pages";

	export let url= "";
</script>


	<Router {url}>
		<Route path="/" component={Home} />
		<Route path="catalog/:category" component={Catalog} />
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
		<Route path="cart" component={Cart} />
    	<Route path="checkout" component={Checkout} />
		<Route path="product/:id" component={Product} />
	  </Router>
