<script>
	import "./style.scss";
  import { Router, Route } from "svelte-routing";
	import { Cart, Catalog, Checkout, Home, Login, Product, Register } from "./pages";

	export let url= "";
</script>

<main>
	<Router {url}>
		<Route path="/" component={Home} />
		<Route path="catalog" component={Catalog} />
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
		<Route path="cart" component={Cart} />
    	<Route path="checkout" component={Checkout} />
		<Route path="product" component={Product} />
	  </Router>
</main>