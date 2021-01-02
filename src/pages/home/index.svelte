<script>
    import "./index.scss";
    import {
        Navbar,
        Hero,
        FeaturedCategory,
        ProductsList,
        Chart,
        ProductsSlider,
        Footer,
    } from "../../containers";
    import { apiUrl } from "../../stores";

    let products;

    let latestProducts = [];
    let bestSeller = [];

    const getlatest = (async () => {
        const response = await fetch(apiUrl + "product", {
            method: "GET",
        });
        let res = await response.json();
        if (response.status == 200) {
            products = res.data;
            let len = products.length;
            for (var i = 0; i < len; i++){
                latestProducts = [...latestProducts, products[i]];
            }
        }
    })();

    const getbestseller = (async () => {
        const response = await fetch(apiUrl + "product/sold", {
            method: "GET",
        });
        let res = await response.json();
        if (response.status == 200) {
            bestSeller = res.data;
        }
    })();
</script>

<Navbar />
<Hero />
<FeaturedCategory />
{#if latestProducts}
<ProductsList category="Latest Product" products={latestProducts} />
{/if}
{#if bestSeller}
<Chart products={bestSeller} />
<!-- <ProductsSlider title="Best Seller" cat={"best"} /> -->
{/if}
<Footer />
