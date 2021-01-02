<script>
    import "./index.scss";
    import {
        Navbar,
        ProductDetail,
        ProductsSlider,
        Footer,
    } from "../../containers";
    import { apiUrl } from "../../stores";

    export let id;
    let product = {};
    let products = [];

    const getproduct = (async () => {
        const response = await fetch(apiUrl + "product/" + id, {
            method: "GET",
        });
        let res = await response.json();
        if (response.status == 200) {
            product = res.data;
        }
    })();

    // const getproducts = (async () => {
    //     const response = await fetch(apiUrl + "product/category/" + product.product_category, {
    //         method: "GET",
    //     });
    //     let res = await response.json();
    //     if (response.status == 200) {
    //         products = res.data.product;
    //     }
    // })();
</script>

<Navbar />
{#if product}
<ProductDetail {id}/>
{/if}
<!-- {#if products}
<ProductsSlider title={product.product_category} cat={product.product_category} />
{/if} -->
<Footer />
