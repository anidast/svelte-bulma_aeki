<script>
    import "./index.scss";
    import { Navbar, Cart, Footer } from "../../containers";
	import { user } from "../../stores";
</script>

<Navbar />
{#if user}
<Cart />
{/if}
<Footer />