<script>
    import "./index.scss";
    import { Navbar, Promo, ProductsList, Footer } from "../../containers";
    import { apiUrl } from "../../stores";

    export let category;

    let products;
    const getproducts = (async () => {
        const response = await fetch(apiUrl + "product/category/" + category, {
            method: "GET",
        });
        let res = await response.json();
        if (response.status == 200) {
            products = res.data.products;
        }
    })();
</script>

<Navbar />
<Promo />
{#if products}
<ProductsList {category} {products}/>
{/if}
<Footer />